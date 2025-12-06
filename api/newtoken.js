
export default function handler(req, res) {
  const timestamp = Math.floor(Date.now() / 1000);
  const random = Math.random().toString(36).substring(2, 8);

  const token = timestamp + random;

  const link = `https://fitness-access-backend.vercel.app/api/access/${token}`;

  res.status(200).json({ link });
}

