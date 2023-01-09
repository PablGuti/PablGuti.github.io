const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString(); // Convierto el chunk a un string
  });
  req.on('end', () => {
    // Procesa la solicitud del webhook y realiza cualquier acción necesaria
    processWebhookRequest(body);

    // Escribe el cuerpo de la solicitud en un archivo de texto
    fs.writeFile('webhook-request.txt', body, err => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end();
        return;
      }
      // Envía una respuesta al cliente
      res.statusCode = 200;
      res.end('Webhook recibido');
    });
  });
});

server.listen(443);

function processWebhookRequest(request) {
  const fs = require('fs');

const fileName = 'mi-archivo.txt';
const fileContent = request;

fs.writeFile(fileName, fileContent, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`El archivo ${fileName} ha sido creado`);
});
}
