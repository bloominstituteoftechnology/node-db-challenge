
exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(table){
      table.increments();
      table     
        .string("description", 360)
        .string("notes",280)
        .notNullable()
        .boolean("completed").defaultTo(false)
        .unique("uq_name")
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
