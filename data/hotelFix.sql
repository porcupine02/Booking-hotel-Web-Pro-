alter table booking
drop foreign key booking_ibfk_1;
alter table login
drop foreign key login_ibfk_1;


DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `cus_id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) NOT NULL,
  `phone` int(10) NOT NULL,
  `email` varchar(40) NOT NULL,
  `DOB` date NOT NUll,
  PRIMARY KEY (`cus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `logIn`;
CREATE TABLE `logIn` (
  `login_id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `cus_id` int(5) unsigned NOT NULL,
  `user_name` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `login_role` enum('manager', 'customer') NOT NULL DEFAULT 'customer',
  PRIMARY KEY (`login_id`),
  FOREIGN KEY (`cus_id`) REFERENCES `customers`(`cus_id`)
   
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

alter table booking 
drop foreign key booking_ibfk_2;
alter table vacantroom 
drop foreign key vacantroom_ibfk_1;
alter table roomdetail
drop room_id;
DROP TABLE IF EXISTS `roomDetail`;
CREATE TABLE `roomDetail` (
  `room_id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `room_img_id` int(2) unsigned NOT NULL,
  `room_type` varchar(25)  NOT NULL,
  `price` int(10)  NOT NULL,
  `rate` int(1) ,
  `description` varchar(500),
  `service_id` int(5) unsigned,
  PRIMARY KEY (`room_id`)

   
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


alter table payment
drop foreign key payment_ibfk_1;


DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `booking_id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `cus_id` int(5) unsigned NOT NULL,  
  `room_id` int(5) unsigned NOT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL,
  `Promotion_code` varchar(5),
  `booking_fname` varchar(25) NOT NULL,
  `booking_lname` varchar(25)  NOT NULL,
  `timestamp_booking` datetime  NOT NULL,
  `people` int(1) NOT NULL,
  `countRoom` int(2) NOT NULL,
  PRIMARY KEY (`booking_id`),
  FOREIGN KEY (`cus_id`) REFERENCES `customers`(`cus_id`),
  FOREIGN KEY (`room_id`) REFERENCES `roomDetail`(`room_id`)
   
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `vacantRoom`;
CREATE TABLE `vacantRoom` (
  `room_id`int(5) unsigned NOT NULL AUTO_INCREMENT,
  `count` int(2)  NOT NULL,
  `date` date,
  PRIMARY KEY (`date`, `room_id`),
  FOREIGN KEY (`room_id`) REFERENCES `roomDetail`(`room_id`)
   
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;



DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `payment_id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `payment_date` date  NOT NULL,
  `payment_slip` varchar(40) NOT NULL,
  `payment_total_money` int(10) NOT NULL,
  `booking_id` int(5) unsigned NOT NULL ,
  PRIMARY KEY (`payment_id`),
  FOREIGN KEY (`booking_id`) REFERENCES `booking`(`booking_id`)
   
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;



DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `service_id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `breakfast` enum('yes', 'no')  NOT NULL,
  `pool` enum('yes', 'no')  NOT NULL,
  `wifi` enum('yes', 'no')  NOT NULL,
  `air_conditioner` enum('yes', 'no')  NOT NULL,
  PRIMARY KEY (`service_id`)
   
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `room_img_id` int(5) unsigned NOT NULL AUTO_INCREMENT,
  `pic1` varchar(40) NOT NULL,
  `pic2` varchar(40),
  `pic3` varchar(40),
  `pic4` varchar(40),
  `pic5` varchar(40),
  PRIMARY KEY (`room_img_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;