exports.up = function(knex) {
  return (
    knex.schema

      ///// projects table ///
      .createTable("projects", tbl => {
        tbl.increments();
        tbl
          .string("name", 128)
          .notNullable()
          .unique();
        tbl
          .string("description", 255)
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(0);
      })

      /// resources table ///
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("name", 128)
          .notNullable()
          .unique();
        tbl.string("description", 255);
        tbl
          .integer("project_id")
          .unsigned()
          .unique()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })

      /// tasks table///
      .createTable("tasks", tbl => {
        tbl.increments();
       tbl
       .string("description", 255)
        .notNullable();
        
        tbl.string("notes", 255);

        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(0);

        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .defaultTo(0)
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("RESTRICT");
      })
  );
  // .createTable("resources", tbl => {
  //   tbl.increments();

  //   tbl

  //   tbl.unique(["project_id", "resource_id"]);
  //   tbl
  //     .integer("project_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("id")
  //     .inTable("projects")
  //     .onDelete("CASCADE")
  //     .onUpdate("CASCADE");
  // });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project-resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};

exports.down = function(knex) {};
