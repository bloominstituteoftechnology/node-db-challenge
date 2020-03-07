
exports.up = function(knex) {
  return knex.schema
    // Projects Table
    .createTable("projects", project => {
        project.increments();
        project.string("project_name", 128).notNullable();
        project.text("project_description");
        project.boolean("project_completed").defaultTo(false);
    })
    // Resources Table
    .creatTable("resources", resource => {
        resource.increments();
        resource.string("resource_name", 128).notNullable().unique();
        resource.text("resource_description");
    })
    // Tasks Table
    .createTable("tasks", task => {
        task.increments();
        task.string("task_description", 128).notNullable();
        task.text("task_notes");
        task.boolean("task_completed").defaultTo(false);
        task
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("project-resources", pr_res => {
        pr_res
        .integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        pr_res
        .integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        pr_res.primary(['project_id', 'resource_id'])
      } )
};

exports.down = function(knex) {
  return (
      knex.schema
        .dropTableIfExists("project-resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects")
  )
};
