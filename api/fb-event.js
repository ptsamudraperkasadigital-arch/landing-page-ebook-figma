const PIXEL_ID = '520138225624460';
const ACCESS_TOKEN = 'EAAGKVolX2AEBRY9t1bXH8h6bEZAJyNOLM5xpD4lynff6ecZBFRi5rdkrv6oqw8jvkZBDOfrRUVzZCda9em7d7OoJAtDlACHoQCW8JfMTAqgI2ozG3IbTuYXcizQ2k1CGeCi6jZCYZCGi0KeDKZCoKggBBRsORZAJEvLZC3tUbjpwHwr7YR3Ri0Rs6iUqk9c4ZABAZDZD';
const FB_API_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`;

export default async function handler(req, res) {
  // Allow CORS from same origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { event_name, event_source_url, client_user_agent, client_ip_address, event_id } = req.body;

    if (!event_name) {
      return res.status(400).json({ error: 'event_name is required' });
    }

    const eventData = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id: event_id, // For deduplication
          action_source: 'website',
          event_source_url: event_source_url || 'https://landing-page-ebook-figma.vercel.app',
          client_user_agent: client_user_agent || req.headers['user-agent'] || '',
          client_ip_address: client_ip_address
            || req.headers['x-forwarded-for']?.split(',')[0]
            || req.socket?.remoteAddress
            || '',
        },
      ],
      // Uncomment below to test events in Events Manager (remove in production)
      // test_event_code: 'TEST12345',
    };

    const fbResponse = await fetch(`${FB_API_URL}?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    });

    const fbData = await fbResponse.json();

    if (!fbResponse.ok) {
      console.error('FB CAPI error:', fbData);
      return res.status(fbResponse.status).json({ error: fbData });
    }

    return res.status(200).json({ success: true, result: fbData });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
