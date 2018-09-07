
exports.up = function(knex, Promise) {
    return knex.schema.createTable("projects", function(table){
        table.increments(); 
        table
          .string("name", 128)
          .notNullable()
          .string("description", 360)
          .boolean('completed').defaultTo(false)
          .unique("name")
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects")
  };