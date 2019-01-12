exports.up = function(knex, Promise) {
    return knex.schema.table('projects', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('description')
      table.boolean('complete')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('projects', table => {
        table.dropColumn('description')
    })
  };