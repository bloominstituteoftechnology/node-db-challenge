exports.up = (knex, Promise) => {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.string('description', 255).notNullable();
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('projects');
