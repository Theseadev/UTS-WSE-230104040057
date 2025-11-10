const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'articles.json');

function readData() {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function saveData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET ALL
exports.getAll = (req, res) => {
  const articles = readData();
  res.status(200).json({ status: "success", data: articles });
};

// GET BY ID
exports.getById = (req, res) => {
  const articles = readData();
  const article = articles.find(a => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({
      status: "fail",
      message: "Artikel tidak ditemukan"
    });
  }

  res.status(200).json({ status: "success", data: article });
};

// CREATE
exports.create = (req, res) => {
  const { title, author, content } = req.body;

  // VALIDATION
  if (!title) return res.status(400).json({ status: "fail", message: "Field 'title' wajib diisi" });
  if (!author) return res.status(400).json({ status: "fail", message: "Field 'author' wajib diisi" });
  if (!content) return res.status(400).json({ status: "fail", message: "Field 'content' wajib diisi" });

  const articles = readData();
  const newArticle = {
    id: articles.length ? articles[articles.length - 1].id + 1 : 1,
    title,
    author,
    content
  };

  articles.push(newArticle);
  saveData(articles);

  res.status(201).json({
    status: "success",
    data: newArticle
  });
};

// UPDATE
exports.update = (req, res) => {
  const articles = readData();
  const article = articles.find(a => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({
      status: "fail",
      message: "Artikel tidak ditemukan"
    });
  }

  const { title, author, content } = req.body;

  if (!title || !author || !content) {
    return res.status(400).json({
      status: "fail",
      message: "Semua field wajib diisi"
    });
  }

  article.title = title;
  article.author = author;
  article.content = content;

  saveData(articles);

  res.status(200).json({ status: "success", data: article });
};

// DELETE
exports.remove = (req, res) => {
  const articles = readData();
  const index = articles.findIndex(a => a.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Artikel tidak ditemukan"
    });
  }

  articles.splice(index, 1);
  saveData(articles);

  res.status(204).send();
};
