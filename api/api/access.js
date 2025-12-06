export default async function handler(req, res) {
  const token = req.query.token;

  // Здесь можно сделать проверку токена в базе, если нужно
  // Пока просто считаем токен одноразовым без хранения

  return res.status(200).send(`
    <html>
      <body>
        <h1>Ваш одноразовый доступ подтвержден</h1>
        <p>Токен: ${token}</p>
      </body>
    </html>
  `);
}
