const environment = process.env.NODE_ENV || "development"; 
const configuration = require("../../knexfile")[environment]; 
const database = require("knex")(configuration); //eslint-disable-line
const bcrypt = require("bcrypt"); //eslint-disable-line
const crypto = require("crypto"); //eslint-disable-line

