module.exports = (req, res) => {
  res.json({ message: 'Test', url: process.env.CLIENT_URL });
}
