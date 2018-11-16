
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl =>{
        tbl.increments()
        tbl.string('name', 128).unique().notNullable()
        tbl.string('description', 500).notNullable()
        tbl.boolean('complete').defaultTo(false)
        tbl.integer('project_id').references('projects.id').notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
  };
  