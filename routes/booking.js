const express = require("express");
const pool = require("../config");
const path = require("path")

router = express.Router();


router.get("/booking", async function (req, res, next) {
    try {
      const [rows_room, columns_room] = await pool.query('SELECT * FROM roomdetail')
      console.log("hello world")
      res.render('booking', {rooms : JSON.stringify(rows_room)})
    } catch (err) {
      console.log(err)
    }
    // res.render("booking")
  
  });

router.get('/booking/invoice', async function(req, res, next){
    res.render('invoice')
})


exports.router = router;
