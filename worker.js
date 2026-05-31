/**
 * Cloudflare Worker — Disponibilidad Castro de Untia
 *
 * Lee el calendario iCal de Airbnb y devuelve las fechas bloqueadas como JSON.
 *
 * Variable de entorno necesaria (Settings → Variables → Add variable):
 *   AIRBNB_ICAL_URL  →  la URL .ics que exportaste desde Airbnb
 */

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Content-Type': 'application/json',
    };

    // Preflight CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      const icsUrl = env.AIRBNB_ICAL_URL;
      if (!icsUrl) throw new Error('Variable AIRBNB_ICAL_URL no configurada');

      const res = await fetch(icsUrl, {
        headers: { 'User-Agent': 'CalendarSync/1.0' },
      });

      if (!res.ok) throw new Error(`Error al obtener el iCal: ${res.status}`);

      const ics = await res.text();
      const bloqueados = parsearIcal(ics);

      return new Response(JSON.stringify(bloqueados), { headers: corsHeaders });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};

/**
 * Parsea el texto iCal y devuelve array de { from: "YYYY-MM-DD", to: "YYYY-MM-DD" }
 * El rango es INCLUSIVO (ambos extremos bloqueados).
 * DTEND en iCal es exclusivo, por eso restamos 1 día.
 */
function parsearIcal(ics) {
  const bloqueados = [];
  const eventos = ics.match(/BEGIN:VEVENT[\s\S]*?END:VEVENT/g) || [];

  for (const evento of eventos) {
    const inicioMatch = evento.match(/DTSTART[^:]*:(\d{8})/);
    const finMatch = evento.match(/DTEND[^:]*:(\d{8})/);

    if (inicioMatch && finMatch) {
      const desde = aISO(inicioMatch[1]);
      const hasta = aISO(finMatch[1], -1); // DTEND es exclusivo en iCal → restamos 1 día
      if (desde && hasta) bloqueados.push({ from: desde, to: hasta });
    }
  }

  return bloqueados;
}

/**
 * Convierte "YYYYMMDD" a "YYYY-MM-DD", con desplazamiento opcional en días.
 */
function aISO(str, diasExtra = 0) {
  if (!str || str.length < 8) return null;
  const year  = parseInt(str.slice(0, 4));
  const month = parseInt(str.slice(4, 6)) - 1;
  const day   = parseInt(str.slice(6, 8)) + diasExtra;
  const d = new Date(Date.UTC(year, month, day));
  return d.toISOString().slice(0, 10);
}
