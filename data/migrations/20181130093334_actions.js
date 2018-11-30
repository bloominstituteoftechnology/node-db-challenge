exports.up = function(knex, Promise) {
    return knex.schema.createTable("actions", tbl => {
      tbl.increments();
      tbl.string("desctiption", 250).notNullable();
      tbl.string("notes", 250).notNullable();
      tbl.boolean("completed").defaultTo(false);
      tbl.integer("project_id")
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("actions");
  };