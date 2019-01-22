exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("name");
    table.string("token");
    table.string("password_digest");
    table.timestamps();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("users");
};
