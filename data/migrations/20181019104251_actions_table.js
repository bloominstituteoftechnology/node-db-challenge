
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions',function(tbl){

   tbl.integer('project_id').notNullable().references('id').inTable('projects').onDelete('cascade')
    tbl.string('description');
    tbl.string('notes');
    tbl.boolean('completed').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
