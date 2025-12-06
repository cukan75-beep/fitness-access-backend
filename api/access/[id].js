export default function handler(req, res) {
  const { id } = req.query;

  // Проверяем, что токен есть
  if (!id) {
    return res.status(400).send("Invalid token");
  }

  // Токен живёт 1 час
  const creationTime = parseInt(id.substring(0, 10));
  const now = Math.floor(Date.now() / 1000);

  if (now - creationTime > 3600) {
    return res.status(403).send("Время ссылки истекло. Запросите новый доступ.");
  }

  // HTML-страница с iframe ChatBase
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>AI-Фитнес Тренер</title>
    <style>
      body {
        margin: 0;
        background: #f0f2f5;
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      header {
        background: #2a7bff;
        padding: 16px;
        color: white;
        font-size: 22px;
        font-weight: bold;
      }
      iframe {
        flex: 1;
        width: 100%;
        border: none;
        min-height: 600px;
      }
    </style>
  </head>
  <body>
    <header>AI-Фитнес-Тренер</header>

    <iframe
      src="https://www.chatbase.co/chatbot-iframe/rXmZj9IYIFf4XPe7c_w-I"
      style="width: 100%; height: 100%; border: none;"
    ></iframe>

  </body>
  </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
