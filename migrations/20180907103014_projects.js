
exports.up = function(knex, Promise) {
    return knex.schema.createTable("projects", function(table){
        table.increments(); 
        table
          .string("name", 128)
          .notNullable()
          .string("description")
          .boolean('completed').defaultTo(false)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects")
  };