exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments('action_id');

    tbl.string('name', 256).notNullable();

    // FK
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
