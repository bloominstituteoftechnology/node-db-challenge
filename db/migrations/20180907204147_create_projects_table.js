exports.up = function(knex, Promise) {
  return knex.schema.createTable(`projects`, table => {
    table.increments(`id`).primary();
    table.string(`name`, 70);
    table.string(`description`, 300);
    table.integer(`flag`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`projects`);
};
