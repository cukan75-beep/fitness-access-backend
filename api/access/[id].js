export default function handler(req, res) {
  const { id } = req.query;

  // Проверка токена
  if (!id) {
    return res.status(400).send("Invalid token");
  }

  // Парсим UNIX-время создания токена
  const creationTime = parseInt(id.substring(0, 10), 10);
  const now = Math.floor(Date.now() / 1000);

  // Время жизни — 1 час
  if (now - creationTime > 3600) {
    return res.status(403).send("Время ссылки истекло. Запросите новую ссылку.");
  }

  // HTML-страница с адаптивным iframe
  const html = `
  <!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI-Фитнес Тренер</title>

    <style>
      body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: #ffffff;
      }

      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }

      @media (max-width: 600px) {
        iframe {
          height: 100vh;
        }
      }
    </style>
  </head>

  <body>
    <iframe 
      src="https://www.chatbase.co/chatbot-iframe/rXmZj9IYIFf4XPe7c_w-I?sessionId=${id}"
      allowfullscreen>
    </iframe>
  </body>
  </html>
  `;

  res
    .status(200)
    .setHeader("Content-Type", "text/html; charset=UTF-8")
    .send(html);
}
