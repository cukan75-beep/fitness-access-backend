export default function handler(req, res) {
  const id = Math.random().toString(36).substring(2, 10);
  res.status(200).json({ link: `https://fitness-access-backend.vercel.app/api/access/${id}` });
}
