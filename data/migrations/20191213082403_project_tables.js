
exports.up = function(knex) {
    return knex.schema
        .createTable("Project", table => {
            table.increments().unique(); // for ids

            table.string("name", 255).notNullable();

            table.string("description", 255);

            table.boolean("completed").defaultTo(false).notNullable();
        })

        .createTable("Resource", table => {
            table.increments().unique();

            table.string("name", 255).unique().notNullable();

            table.string("description", 255);

            table.integer("p_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Project")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        })

        .createTable("Task", table => {
            table.increments().unique();

            table.string("description").notNullable();

            table.string("notes", 255);

            table.boolean("completed").defaultTo(false).notNullable();

            table.integer("proj_id")
                .unique()
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("Project")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Task")
        .dropTableIfExists("Resource")
        .dropTableIfExists("Project");
};
