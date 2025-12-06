export default function handler(req, res) {
  // timestamp в секундах
  const timestamp = Math.floor(Date.now() / 1000);

  // случайная строка
  const random = Math.random().toString(36).substring(2, 8);

  // токен = 10 цифр времени + рандом
  const token = `${timestamp}${random}`;

  res.status(200).json({
    link: `https://fitness-access-backend.vercel.app/api/access/${token}`
  });
}
