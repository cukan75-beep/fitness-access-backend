export default async function handler(req, res) {
  // Генерируем токен
  const token = Math.random().toString(36).substring(2, 12);

  // Возвращаем ссылку без записи в файл
  return res.status(200).json({
    link: `https://${req.headers.host}/api/access/${token}`
  });
}

