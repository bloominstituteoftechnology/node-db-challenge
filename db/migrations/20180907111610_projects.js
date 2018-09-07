
exports.up = function(knex, Promise) {
    return knex.schema.createTable("projects", function(table){
        table.increments(); 
        table.boolean('completed').defaultTo(false)
        table     
        .string("name", 128)
        .notNullable()
        .unique("name");
        table
        .string("description", 128)
        .notNullable()
        .unique("description")
    })
  };
   exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects")
  };