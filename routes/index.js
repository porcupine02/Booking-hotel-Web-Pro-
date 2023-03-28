const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    console.log("hello world")
  } catch (err) {
    console.log(err)
  }
  res.render("home")

});

router.get("/detail", async function (req, res, next) {
  try {
    console.log("hello world")
  } catch (err) {
    console.log(err)
  }
  res.render("detail")

});
router.get("/booking", async function (req, res, next) {
  try {
    console.log("hello world")
  } catch (err) {
    console.log(err)
  }
  res.render("booking")

});
router.get("/search", async function (req, res, next) {
  try {
    console.log("hello world")
  } catch (err) {
    console.log(err)
  }
  res.render("search")

});
router.get("/profile", async function (req, res, next) {
  try {
    console.log("hello world")
  } catch (err) {
    console.log(err)
  }
  res.render("profile")

});

exports.router = router;
