exports.up = function(knex) {
  knex.schema
    .createTable("Projects", tbl => {
      tbl.increments();
      tbl
        .text("Name")
        .notNullable()
        .unique();
      tbl.text("Description").notNullable();
      tbl.boolean("taskCompleted").defaultTo(false);
    })
    .createTable("Resources", tbl => {
      tbl.increments();
      tbl
        .text("Name")
        .notNullable()
        .unique();
      tbl.text("Description").notNullable();
    })
    .createTable("Tasks", tbl => {
      tbl.increments();
      tbl
        .text("Description")
        .notNullable()
        .unique();
      tbl
        .integer("ProjectId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.text("Note").notNullable();
      tbl.boolean("task_completed").defaultTo(false);
    })
    .createTable("TaskResources", tbl => {
      tbl.increments();
      tbl
        .integer("TaskId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Tasks")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ResourcesId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("TaskResources")
    .dropTableIfExists("Tasks")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Projects");
};
