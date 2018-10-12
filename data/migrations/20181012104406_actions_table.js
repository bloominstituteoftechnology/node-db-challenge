
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Actions', function(tbl){
    tbl.increments();
    tbl.string('description', 255).notNullable();;
    tbl.string('notes', 511).notNullable();;
    tbl.boolean('completed').defaultTo(false);
    tbl
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('Projects')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Actions')
};
