
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments()
      tbl.string('description', 255).notNullable()
      tbl.string('notes', 255)
      tbl.boolean('finished')
      tbl.integer('project_key').notNullable()
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
  };
  