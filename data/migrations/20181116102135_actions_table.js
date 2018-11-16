
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl){
      tbl.increments()
      tbl.string('description')
      tbl.string('notes')
      tbl.boolean('completed')
      tbl.integer('project_id').unsigned().references('projects.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
