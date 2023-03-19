const express = require("express");
const router = express.Router();
const {
  postQuesAns,
  getQuesAns,
} = require("../controllers/questionAnswerController");

const protect = require("../middleware/authMiddleware");

router.post("/post", postQuesAns);
router.post("/get", getQuesAns);

module.exports = router;
