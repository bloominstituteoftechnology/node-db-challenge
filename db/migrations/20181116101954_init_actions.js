exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl.string('a_description').notNullable();
    tbl.string('a_notes').notNullable();
    tbl.boolean('a_completed').defaultTo(false);
    tbl
      .integer('project_id')
      .notNullable()
      .defaultTo(1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};
