exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", function(table){
        table.increments();
        table.boolean("completed").defaultTo(false)
        table     
          .string("desc", 128)
          .notNullable()
          .unique("desc")
        table
          .string("notes", 128)
          .notNullable()
          .unique("notes")
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects");
    })
  };
   exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists("actions"); 
  };