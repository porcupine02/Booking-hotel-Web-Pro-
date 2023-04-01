const express = require("express");
const pool = require("../config");

router = express.Router();


router.get("/detail/:id", async function (req, res, next) {
    try {
      console.log("hello world")
      const [row_room, columns_room] = await pool.query('SELECT * FROM  roomdetail r join image i on (r.room_img_id = i.room_img_id) join services s on (r.service_id = s.service_id) WHERE r.room_id = ?',[req.params.id])
        
      res.render('detail', {roomm : JSON.stringify(row_room).replaceAll('./', '/')})
    //   console.log(req.params.id)
    } catch (err) {
      console.log(err)
    }
    res.render("detail")
  
  });



  exports.router = router;
