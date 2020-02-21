/* jshint esversion:6 */

exports.up = function(knex) {
  // projects table
  return (
    knex.schema
      //project table
      .createTable("projects", tbl => {
        tbl.increments();

        tbl
          .string("name")
          .notNullable()
          .index();
        tbl.string("description");
        tbl.boolean("completed");
      })
      // resource table
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("name")
          .notNullable()
          .index();
        tbl.string("description");
        tbl
          .integer("project_id") // the foreign key must be the same type as the primary key it references
          .unsigned() //always include .unsigned() when referencing an integer primary key
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      // tasks table
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description").notNullable();
        tbl.string("notes");
        tbl.boolean("completed", false).notNullable();
        tbl
          .integer("project_id") // the foreign key must be the same type as the primary key it references
          .unsigned() //always include .unsigned() when referencing an integer primary key
          .notNullable()
          .references("id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
  );
};
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
