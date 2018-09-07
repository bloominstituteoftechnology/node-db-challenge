exports.up = function(knex, Promise) {
  return knex.schema.createTable(`actions`, table => {
    table.increments(`id`).primary();
    table
      .integer(`project_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`projects`);
    table.string(`name`, 70);
    table.string(`description`, 300);
    table.string(`notes`, 500);
    table.integer(`flag`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`actions`);
};
