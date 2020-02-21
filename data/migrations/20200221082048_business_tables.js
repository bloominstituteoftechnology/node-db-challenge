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
      })
      // tasks table
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description").notNullable();
        tbl.string("notes");
        tbl.boolean("completed", false).notNullable();
      })
  );
};
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
