const express = require("express");
const {
  getArticles,
  createArticle,
} = require("../controllers/articleController");

const router = express.Router();

router.get("/", getArticles);

router.post("/", createArticle);

module.exports = router;
