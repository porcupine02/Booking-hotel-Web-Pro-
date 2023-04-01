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
    var search = req.query.search;
    const [rows_room, columns_room] = await pool.query('SELECT * FROM  roomdetail r join image i on (r.room_img_id = i.room_img_id); ')

    // console.log(search.toLowerCase())

        var find_room = rows_room.filter(d => {

            var type_room = typeof d.room_type === 'string' ? d.room_type.toLowerCase() : ''
            var stype_room = typeof search === 'string' ? search.toLowerCase() : ''

            if(type_room.includes(stype_room)){
                return d
            }
        //    return d.title.includes(search)
        console.log(type_room)
        })


    res.render('search', { roomSearch : JSON.stringify(find_room), search: search})

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
