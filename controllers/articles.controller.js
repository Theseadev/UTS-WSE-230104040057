const articles = require("../data/articles.json");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/articles.json");

// Save function
const saveData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET all articles
exports.getAll = (req, res) => {
  res.json({
    status: "success",
    data: articles,
  });
};

// GET by ID
exports.getById = (req, res) => {
  const id = req.params.id;
  const article = articles.find((a) => a.id == id);

  if (!article) {
    return res.status(404).json({
      status: "error",
      message: "Article not found",
    });
  }

  res.json({
    status: "success",
    data: article,
  });
};

// CREATE
exports.create = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content || title.trim() === "" || content.trim() === "") {
    return res.status(400).json({
      status: "error",
      message: "title dan content wajib diisi",
    });
  }

  const newArticle = {
    id: Date.now().toString(),
    title,
    content,
  };

  articles.push(newArticle);
  saveData(articles);

  res.status(201).json({
    status: "success",
    data: newArticle,
  });
};

// UPDATE
exports.update = (req, res) => {
  const id = req.params.id;
  const index = articles.findIndex((a) => a.id == id);

  // Jika ID tidak ditemukan
  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: "Article not found",
    });
  }

  // Jika body kosong
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: "error",
      message: "Request body cannot be empty",
    });
  }

  const { title, content } = req.body;

  // VALIDASI: title / content tidak boleh string kosong
  if (
    (title !== undefined && title.trim() === "") ||
    (content !== undefined && content.trim() === "")
  ) {
    return res.status(400).json({
      status: "error",
      message: "title dan content tidak boleh kosong",
    });
  }

  // VALIDASI: minimal harus ada 1 field yang valid
  if (title === undefined && content === undefined) {
    return res.status(400).json({
      status: "error",
      message: "Tidak ada field yang bisa diupdate",
    });
  }

  // Update field
  if (title !== undefined) articles[index].title = title;
  if (content !== undefined) articles[index].content = content;

  saveData(articles);

  res.json({
    status: "success",
    data: articles[index],
  });
};

// DELETE
exports.remove = (req, res) => {
  const id = req.params.id;
  const index = articles.findIndex((a) => a.id == id);

  if (index === -1) {
    return res.status(404).json({
      status: "error",
      message: "Article not found",
    });
  }

  articles.splice(index, 1);
  saveData(articles);

  res.json({
    status: "success",
    message: "Article deleted",
  });
};
