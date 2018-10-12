exports.up = knex => {
  knex.schema.createTable('actions', table => {
    table.increments();
    table
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects');
    table.string('description', 128).notNullable();
    table.string('comments').notNullable();
    table.boolean('complete?').defaultTo(false);
  });
};

exports.down = knex => knex.schema.dropTableIfExists('actions');
