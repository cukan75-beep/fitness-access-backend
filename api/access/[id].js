const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI-Фитнес Тренер</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100%;
    }

    .wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
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
  <div class="wrapper">
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/rXmZj9IYIFf4XPe7c_w-I"
      allowfullscreen
    ></iframe>
  </div>
</body>
</html>
`;

