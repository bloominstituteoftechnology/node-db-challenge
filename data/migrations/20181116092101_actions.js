exports.up = (knex, Promise) => {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl.string('description', 255).notNullable();
    tbl.string('notes', 255).notNullable();
    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('actions');
