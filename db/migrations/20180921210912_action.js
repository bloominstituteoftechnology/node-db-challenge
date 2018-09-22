
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
      tbl.increments()
      tbl.string('notes',1000000)
      tbl.string('description',1000).notNullable()
      tbl.bool('completed')
      tbl.integer('project_Id').notNullable().unsigned().references('projects.id')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
  };
