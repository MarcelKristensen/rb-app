const express = require("express");
const {
  getArticles,
  createArticle,
  getArticle,
  deleteArticle,
  updateArticle,
} = require("../controllers/articleController");

const router = express.Router();

//GET all articles
router.get("/", getArticles);

//GET a single article
router.get("/:id", getArticle);

//POST a article
router.post("/", createArticle);

//DELETE a article
router.delete("/:id", deleteArticle);

//UPDATE a article
router.patch("/:id", updateArticle);

module.exports = router;
