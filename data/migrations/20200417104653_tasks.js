exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments();

    tbl.string('description').notNullable();
    tbl.string('notes');
    tbl.bool('completed').defaultTo(false);

    tbl
      .integer('project_id')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
