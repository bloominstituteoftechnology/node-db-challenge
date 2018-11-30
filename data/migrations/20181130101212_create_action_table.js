
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl.text('description', 500);
    tbl.text('notes');
    tbl.boolean('completed');
    tbl.integer('projectNum').references('projects.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
