insert into roomDetail(room_img_id, room_type, price, rate, description, service_id)
values(1, 'standard room', 1500, 5, "ห้องพักระดับเริ่มต้นสำหรับคนงบประหยัด", 1),
(2, 'deluxe room', 2000, 5, "ห้องพักระดับเริ่มต้นสำหรับคนงบประหยัด", 2),
(3, 'suite room', 2500, 5, "ห้องพักระดับเริ่มต้นสำหรับคนงบประหยัด", 3),
(4, 'superior room', 3000, 5, "ห้องพักระดับเริ่มต้นสำหรับคนงบประหยัด", 4);

insert into image(room_img_id, pic1, pic2, pic3, pic4)
values(1, './imagehotel/standard1.jpg', './imagehotel/standard2.jpg', './imagehotel/standard3.jpg', './imagehotel/standard4.jpg'),
(2, './imagehotel/deluxe1.jpg', './imagehotel/deluxe2.jpg', './imagehotel/deluxe3.jpg', './imagehotel/deluxe4.jpg'),
(3, './imagehotel/suite1.jpg', './imagehotel/suite2.jpg', './imagehotel/suite3.jpg', './imagehotel/suite4.jpg'),
(4, './imagehotel/superior1.jpg', './imagehotel/superior2.jpg', './imagehotel/superior3.jpg', './imagehotel/superior4.jpg');

insert into services(service_id, breakfast, pool, wifi, air_conditioner)
values(1, 'yes', 'yes', 'no', 'yes'),
(2, 'yes', 'yes', 'no', 'yes'),
(3, 'yes', 'yes', 'yes', 'yes'),
(4, 'yes', 'yes', 'yes', 'yes');
