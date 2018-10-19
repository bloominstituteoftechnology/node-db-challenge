
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions',function(tbl){
    tbl.integer('id').unsigned().references('id').inTable('projects');
    tbl.string('description');
    tbl.string('notes');
    tbl.boolean('completed').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
