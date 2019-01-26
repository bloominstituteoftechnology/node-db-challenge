
exports.up = function(knex, Promise) {
    return knex.schema.table('projects', table => {
        table.specificType('actions', 'jsonb[]')
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
  };
