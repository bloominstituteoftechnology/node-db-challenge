exports.up = knex => {
  knex.schema.createTable('projects', table => {
    table.increments();
    table.string('name', 128).notNullable();
    table.string('notes').notNullable();
    table.Boolean('complete').defaultTo(false);
  });
};

exports.down = knex => knex.schema.dropTableIfExists('projects');
