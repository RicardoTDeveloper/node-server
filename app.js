const express = require("express");
const app = express();
const port = 3000; // Você pode escolher outra porta, se preferir

// Rota raiz (http://localhost:3000/)
app.get("/", (req, res) => {
   res.send("Hello, mundo!");
});

// Iniciar o servidor
app.listen(port, () => {
   console.log(`Servidor rodando em http://localhost:${port}`);
});
