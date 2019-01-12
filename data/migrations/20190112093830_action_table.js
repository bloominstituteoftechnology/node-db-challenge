
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', tbl => {
      tbl.increments();
      //tbl.integer().notNullable().unsigned();
      tbl.string('description', 500);
      tbl.string('notes', 500);
      tbl.boolean('project_completed').notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
