export default function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).send("Invalid token");
  }

  // --- token 1 hour ---
  const creationTime = parseInt(id.substring(0, 10));
  const now = Math.floor(Date.now() / 1000);

  if (now - creationTime > 3600) {
    return res.status(403).send("Время ссылки истекло. Запросите новый доступ.");
  }

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>AI-Фитнес Тренер</title>

    <style>
      body {
        margin: 0;
        padding: 0;
        width: 100%;
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
      allowfullscreen>
    </iframe>
  </body>
  </html>
  `;

  res.status(200)
    .setHeader("Content-Type", "text/html; charset=utf-8")
    .send(html);
}
