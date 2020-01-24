exports.up = function (knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments(); /*for id */
            table.string('proj_name', 128).notNullable();
            table.string('proj_description', 128);
            table.boolean("completed")
                .notNullable()
                .default(0);
        })

        .createTable('tasks', table => {
            table.increments();
            table.string('task_description', 128).notNullable();
            table.string('task_notes');
            table.boolean("completed")
                .notNullable()
                .default(0);

            table.integer('project_id')
                .notNullable()
                .unsigned()
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })

        .createTable('resources', table => {
            table.increments();
            table.string('resource_name', 128)
                .notNullable()
                .unique()
            table.string('resource_description', 128);
        })

        .createTable('p_r', table => {
            table.increments();

            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT') /* this stops us deleting a parent row if a child row exists and references the parent if not it can be deleted */

            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resouces')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
        });


};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("projects")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("p_r");
};