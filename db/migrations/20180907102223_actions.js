
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions',function(tbl){
      tbl.increments('id');
      tbl.string('name');
      tbl.string('description');
      tbl.boolean('complete');
      tbl
      .integer('project_id')
      .notNullable()
      .references('id')
      .inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};
