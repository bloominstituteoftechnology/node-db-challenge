exports.up = function(knex, Promise) {
    return knex.schema.table('projects', table => {
      table.boolean('complete')
      
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('projects', table => {
        table.dropColumn('complete')
    })
  };