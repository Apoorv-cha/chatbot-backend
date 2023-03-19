const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Token = require("../models/tokenModel");
const crypto = require("crypto");

const QuestionAnswer = require("../models/questionAnswerModel");

const { default: mongoose } = require("mongoose");

const getQuesAns = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  console.log("userId is: ", req.body);

  QuestionAnswer.find({ userId: userId })
    .exec()
    .then((list) => {
      console.log("list is: ", list);
      res.status(200).json({
        array: list,
      });
    })
    .catch((err) => {
      console.log("err is: ", err);
      res.status(500).json({
        error: err,
      });
    });
});

const postQuesAns = asyncHandler(async (req, res) => {
  const { userId, question, answer } = req.body;

  const quesAns = new QuestionAnswer({
    _id: new mongoose.Types.ObjectId(),
    userId: userId,
    question: question,
    answer: answer,
  });

  quesAns
    .save()
    .then((result) => {
      console.log("res is: ", result);
      res.status(200).json({
        result: result,
      });
    })
    .catch((err) => {
      console.log("err is: ", err);
      res.status(500).json({
        err: err,
      });
    });
});

// Get Login Status

module.exports = {
  postQuesAns,
  getQuesAns,
};
