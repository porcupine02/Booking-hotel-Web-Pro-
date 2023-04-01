const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const [rows_room, columns_room] = await pool.query('SELECT * FROM  roomdetail r join image i on (r.room_img_id = i.room_img_id) join services s on (r.service_id = s.service_id) ')
    // const [rows_service, columns_service] = await pool.query('SELECT * FROM roomdetail r join services s on (r.service_id = s.service_id')
    res.render('home', {rooms : JSON.stringify(rows_room)})
  } catch (err) {
    console.log(err)
  }
  // res.render("home")

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
    const [rows_room, columns_room] = await pool.query('SELECT * FROM  roomdetail r join image i on (r.room_img_id = i.room_img_id); ')
    res.render('search', {roomSearch : JSON.stringify(rows_room)})
  
    console.log("hello world")
  } catch (err) {
    console.log(err)
  }


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
