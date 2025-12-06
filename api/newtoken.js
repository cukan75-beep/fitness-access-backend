export default function handler(req, res) {
  const id = `${Date.now()}${Math.random().toString(36).substring(2, 8)}`;
  const url = `https://fitness-access-backend.vercel.app/api/access/${id}`;

  // Делаем переадресацию
  res.redirect(url);
}
