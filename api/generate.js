import { json } from '@vercel/node';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GOOGLE_AI_API_KEY || process.env.VITE_GOOGLE_AI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Server missing Google AI API key' });
    }

    const body = req.body;

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      return res.status(r.status).json({ error: data.error || 'API request failed', details: data });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('api/generate error', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
