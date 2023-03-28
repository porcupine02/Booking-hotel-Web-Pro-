const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/admin", async function (req, res, next) {
    try {
        console.log("hello world")

        const [booking, fields1] = await pool.query(" select * from booking")
        res.render("admin", { booking })
        console.log(booking)

    } catch (err) {
        console.log(err)
    }

});

router.put("/admin/addroom/:id", async function (req, res, next) {
    // เอารูปไปใส่ใน img table ก่อนแล้ว ดึง room_img_id มาใช้
    try {
        const room_id = req.params.id;
        const room_type = req.body.type;
        const price = req.body.price;
        const description = req.body.description;

        // res.send("addd image complete!")

        const [room, fields3] = await pool.query(" update roomdetail \
        set \
        where room_id = ?",
            [room_id])
        res.send("addd room complete!")

    } catch (err) {
        console.log(err)
    }
});



router.put("/admin/updateroom", async function (req, res, next) {
    // เอารูปไปใส่ใน img table ก่อนแล้ว ดึง room_img_id มาใช้
    try {
        const room_type = req.body.type;
        const price = req.body.price;
        const description = req.body.description;

        let pic1 = req.body.pic1;
        let pic2 = req.body.pic2;
        let pic3 = req.body.pic3;
        let pic4 = req.body.pic4;
        if (pic2 = undefined) {
            pic2 = null
        }
        if (pic3 = undefined) {
            pic3 = null
        }
        if (pic4 = undefined) {
            pic4 = null
        }

        const [img, fields1] = await pool.query(" insert into image(pic1, pic2, pic3, pic4) value(?,?,?,?)",
            [pic1, pic2, pic3, pic4])
        // res.send("addd image complete!")

        const imgId = img.insertId
        console.log(imgId)

        const [room, fields3] = await pool.query(" insert into roomdetail(room_type, price, description, room_img_id) value(?,?,?,?)",
            [room_type, price, description, imgId])
        res.send("addd room complete!")

    } catch (err) {
        console.log(err)
    }
});

exports.router = router;