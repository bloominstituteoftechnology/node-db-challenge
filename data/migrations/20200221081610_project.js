exports.up = function(knex) {
  return knex.schema

  //////////// *******  PROJECT PROJECTS PROJECTS ****************////////////

    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 150).notNullable();
      tbl.string("description", 500);
      tbl
        .integer("boolean")
        .notNullable()
        .defaultTo(0);
    })

    //////////// *******  TASKS TASKS TASKS ****************////////////

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description", 1000).notNullable();
      tbl.string("notes", 800);
      tbl
        .integer("boolean")
        .notNullable()
        .defaultTo(0);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })

    //////////// *******  RESOURCES RESOURCES RESOURCES ****************////////////

    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("resource_name", 150).notNullable();
        tbl.string("resource_description", 500);
      })

//////////// **********  PROJECT_RESOURCES  *  PROJECT_RESOURCES ****************////////////

      .createTable("project_resources", tbl => {
        //tbl.increments();
        tbl.primary(["project_id", "resource_id"]);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })

};

///// ********* DOWN DOWN DOWN DOWN ********** ////////////////

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects")
};
