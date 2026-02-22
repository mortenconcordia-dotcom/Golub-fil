const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Указываем серверу принимать внешние подключения

const server = http.createServer((req, res) => {
  // Serve chat.html for all routes
  const filePath = path.join(__dirname, 'chat.html');
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Permissions-Policy': 'microphone=*, camera=*',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

// Передаем HOST вторым параметром
server.listen(PORT, HOST, () => {
  console.log(`Голубь запущен на порту ${PORT} и хосте ${HOST}`);
});
