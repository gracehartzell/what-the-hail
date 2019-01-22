module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/what-the-hail",
    migrations: {
      directory: "./backend/db/migrations"
    },
    seeds: {
      directory: "./backend/db/seeds/dev"
    },
    useNullAsDefault: true
  },

  test: {
    client: "pg",
    connection: "postgres://localhost/what-the-hail_test",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/test"
    },
    useNullAsDefault: true
  }
};
