export default function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).send("Invalid token");
  }

  // токен живёт 1 час
  const creationTime = parseInt(id.substring(0, 10));
  const now = Math.floor(Date.now() / 1000);

  if (Math.abs(now - creationTime) > 3600)

    return res.status(403).send("Время ссылки истекло. Запросите новый доступ.");
  }

  // HTML со встроенным ChatBase iframe
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>AI-Фитнес Тренер</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
      }
      iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    </style>
  </head>
  <body>
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/rXmZj9IYIFf4XPe7c_w-I"
      allow="microphone; autoplay">
    </iframe>
  </body>
  </html>
  `;

  res.status(200).send(html);
}
