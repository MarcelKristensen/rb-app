const Article = require("../models/articleModel");
const mongoose = require("mongoose");

const getArticles = async (req, res) => {
  const articles = await Article.find({}).sort({ createdAt: -1 });

  res.status(200).json(articles);
};

const createArticle = async (req, res) => {
  const { title, text } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!text) {
    emptyFields.push("text");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const article = await Article.create({ title, text });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getArticles,
  createArticle,
};
