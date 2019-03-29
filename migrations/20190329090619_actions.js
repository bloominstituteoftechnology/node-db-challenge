exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl.text('description');
    tbl.text('notes');
    tbl.boolean('complete');
    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions', tbl => {
    tbl.dropUnique('uq_actions_name');
  });
};
