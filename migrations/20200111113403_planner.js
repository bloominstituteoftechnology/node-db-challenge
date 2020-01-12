
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.string("project_name").notNullable()
        table.string("project_description")
        table.boolean("completed").notNullable()
    })

    await knex.schema.createTable("resources", (table) =>  {
        table.increments("id")
        table.string("resource_name").notNullable().unique()
        table.string("resource_description")
    })

    await knex.schema.createTable("tasks", (table) =>  {
        table.increments("id")
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
        table.string("task_description").notNullable()
        table.string("notes")
        table.boolean("completed")
            .notNullable()
            .defaultTo(false)
    })

    await knex.schema.createTable("project_resources", (table) =>  {
        table.integer("project_id")
            .references("id")
            .inTable("projects")
        table.integer("resource_id")
            .references("id")
            .inTable("resources")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
