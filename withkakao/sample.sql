CREATE TABLE IF NOT EXISTS `companyl` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT, 
  `name` varchar(255) NOT NULL, 
  `address` varchar(255) NOT NULL, 
  `lat` FLOAT NOT NULL, 
  `lng` FLOAT NOT NULL, 
  UNIQUE (`name`)
);

CREATE TABLE IF NOT EXISTS `users` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  UNIQUE (`name`)
);

INSERT OR REPLACE INTO `users` VALUES (4,'aaa','vv'),(23,'aa','aa'),(61,'ㅁㅁㅁㅁ','ㅁㅁㅁㅁ'),(62,'asd','asd'),(137,'JOHN','johnn@email.com');

INSERT OR REPLACE INTO `companyl` VALUES (4, 'netmarble', 'seoul', 37.125, 127.223), (23, 'craft', 'seoul', 36.111, 125.222);