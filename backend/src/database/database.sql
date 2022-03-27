CREATE DATABASE IF NOT EXISTS webuddies

CREATE TABLE IF NOT EXISTS users_table(
  id SERIAL PRIMARY KEY,
  nickname  VARCHAR(15) UNIQUE NOT NULL,
  firstname VARCHAR(20) NOT NULL,
  lastname  VARCHAR(20) NOT NULL,
  birth     DATE NOT NULL,
  city      VARCHAR(50) NOT NULL,
  country   VARCHAR(56) NOT NULL,
  mail      VARCHAR(50) NOT NULL,
  phone     VARCHAR(11) NOT NULL
  userpassword  VARCHAR(25) NOT NULL
  profilepicture  VARCHAR(255),
  userstatus VARCHAR(255),
  isdeleted BOOLEAN NOT NULL
)

CREATE TABLE IF NOT EXISTS friendships (
  main_userid FOREIGN KEY NOT NULL,
  target_friendid FOREIGN KEY
)

CREATE TABLE IF NOT EXISTS posts_table (
  id SERIAL PRIMARY KEY,
  userid FOREIGN KEY,
  ispinned BOOLEAN NOT NULL,
  postcontent VARCHAR(320)
)