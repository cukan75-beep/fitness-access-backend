export default function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "No token provided" });
  }

  res.status(200).json({
    message: "Access granted",
    token: id
  });
}
