const express = require('express');
const app = express();
const articlesRoutes = require('./routes/articlesRoutes');

app.use(express.json());

// ROUTES
app.use('/api/articles', articlesRoutes);

// API INFO
app.get('/api/info', (req, res) => {
  res.json({
    name: "UTS Web Service Engineering",
    author: "Fahrul",
    resource: "articles",
    fields: ["title", "author", "content"]
  });
});

// PORT
app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});

module.exports = app;
