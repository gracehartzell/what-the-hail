const environment = process.env.NODE_ENV || "development";
const configuration = require("../../knexfile")[environment];
const database = require("knex")(configuration); //eslint-disable-line
const bcrypt = require("bcrypt"); //eslint-disable-line
const crypto = require("crypto"); //eslint-disable-line

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
    .catch(err => console.error(err));
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

module.exports = { signup };
