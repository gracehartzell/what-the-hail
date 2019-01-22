const environment = process.env.NODE_ENV || "development";
const configuration = require("../../knexfile")[environment];
const database = require("knex")(configuration);
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const signup = (req, res) => {
  const user = req.body;
  hashPassword(user.password)
    .then(hashedPassword => {
      delete user.password;
      user.password_digest = hashedPassword;
    })
    .then(() => createToken())
    .then(token => (user.token = token))
    .then(() => createUser(user))
    .then(user => {
      delete user.password_digest;
      res.status(201).json({ user });
    })
    .catch(err => console.error(err)); //eslint-disable-line
};

const hashPassword = password => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash);
    })
  );
};

const createUser = user => {
  return database
    .raw(
      "INSERT INTO users (username, password_digest, token, created_at) VALUES (?, ?, ?, ?) RETURNING id, username, created_at, token",
      [user.username, user.password_digest, user.token, new Date()]
    )
    .then(data => data.rows[0]);
};

const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString("base64"));
    });
  });
};

const authenticate = userReq => {
  findByToken(userReq.token).then(user => {
    if (user.username === userReq.username) {
      return true;
    } else {
      return false;
    }
  });
};

const findByToken = token => {
  return database
    .raw("SELECT * FROM users WHERE token = ?", [token])
    .then(data => data.rows[0]);
};

module.exports = { signup, authenticate };
