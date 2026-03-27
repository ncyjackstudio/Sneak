const Ably = require('ably');

module.exports = async function handler(req, res) {
  try {
    const client = new Ably.Rest(process.env.ABLY_API_KEY);
    const clientId = Math.random().toString(36).substring(2, 15);
    const tokenRequest = await client.auth.createTokenRequest({ clientId });
    res.json(tokenRequest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Token generation failed' });
  }
};
