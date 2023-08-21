const express = require("express");
const {
  getArticles,
  createArticle,
  getArticle,
  deleteArticle,
  updateArticle,
} = require("../controllers/articleController");

const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

//GET all articles
router.get("/", getArticles);

// KRÆVER AUTURISEREDE TOKEN FOR AT LOADE DISSE
router.use(requireAuth)

//GET a single article
router.get("/:id", getArticle);

//POST a article
router.post("/", createArticle);

//DELETE a article
router.delete("/:id", deleteArticle);

//UPDATE a article
router.patch("/:id", updateArticle);

module.exports = router;
