const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/admin", async function (req, res, next) {
    try {
        console.log("hello world")

        const [booking, fields1] = await pool.query(" select * from booking")
        const [rooms, fields2] = await pool.query(" select * from roomdetail r left outer join image i on (r.room_img_id = i.room_img_id)")
        res.render("admin", { booking: JSON.stringify(booking), rooms: JSON.stringify(rooms) })
        console.log(booking)

    } catch (err) {
        console.log(err)
    }

});

router.put("/admin/updateroom/:id", async function (req, res, next) {
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



router.put("/admin/addroom", async function (req, res, next) {
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
        let breakfast = req.body.breakfast;
        let pools = req.body.pool;
        let wifi = req.body.wifi;
        let air_conditioner = req.body.air;
        if (breakfast = null) {
            breakfast = "no";
        }
        if (pools = null) {
            pools = "no";
        }
        if (wifi = null) {
            wifi = "no";
        }
        if (air_conditioner = null) {
            air_conditioner = "no";
        }

        const [services, fields4] = await pool.query(" insert into services(breakfast, pool, wifi, air_conditioner) value(?,?,?,?)",
            [breakfast, pools, wifi, air_conditioner])
        res.send("addd service complete!")
        const serviceId = services.insertId
        console.log(serviceId)



        const [img, fields1] = await pool.query(" insert into image(pic1, pic2, pic3, pic4) values(?,?,?,?)",
            [pic1, pic2, pic3, pic4])
        const imgId = img.insertId
        console.log(imgId)
        // res.send("addd image complete!")
        const [room, fields3] = await pool.query(" insert into roomdetail(room_type, price, description, room_img_id, service_id) value(?,?,?,?,?)",
            [room_type, price, description, imgId, serviceId])
        res.send("addd room complete!")

    } catch (err) {
        console.log(err)
    }
});

exports.router = router;