CREATE DATABASE IF NOT EXISTS webuddies

CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  nickname  VARCHAR(15) UNIQUE NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name  VARCHAR(20) NOT NULL,
  birth     DATE NOT NULL,
  city      VARCHAR(50) NOT NULL,
  mail      VARCHAR(50) UNIQUE NOT NULL,
  password  VARCHAR(255) NOT NULL,
  profile_picture  VARCHAR(255),
  user_status VARCHAR(255),
  is_deleted BOOLEAN NOT NULL
)

CREATE TABLE IF NOT EXISTS friendships (
  main_user_id INTEGER REFERENCES users (id),
  target_friend_id INTEGER REFERENCES users (id)
)

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  post_content VARCHAR(210),
  timestamp timestamp default current_timestamp
)