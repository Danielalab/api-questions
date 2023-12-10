const express = require('express');
const app = express();
const port = 8080; // Puedes cambiar el puerto según tus necesidades

// Importar el array de preguntas desde preguntas.js
const preguntas = require('./question');


app.use(express.json()); 



app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


// Nueva ruta para obtener las preguntas
app.get('/api/preguntas', (req, res) => {
    res.json({ preguntas });
  });

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
