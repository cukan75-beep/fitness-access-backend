export default function handler(req, res) {
  const timestamp = Math.floor(Date.now() / 1000);
  const random = Math.random().toString(36).substring(2, 8);

  const token = timestamp + random;

  const link = `https://fitness-access-backend.vercel.app/api/access/${token}`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
    <html>
      <body style="font-size:20px; padding:20px;">
        <a href="${link}" style="font-weight:bold; font-size:22px;">
          👉 Нажмите сюда, чтобы открыть доступ
        </a>
        <br><br>
        <div>Или используйте прямую ссылку:</div>
        <div>
          <a href="${link}">${link}</a>
        </div>
      </body>
    </html>
  `);
}


