
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments()
            tbl.string('project_name', 255).notNullable();
            tbl.string('projct_description');
            tbl
                .boolean('completed')
                .notNullable()
                .default(0);

        })
        .createTable('taks', tbl => {
            tbl.increments();
            tbl.string('task_description', 255).notNullable();
            tbl.string('task_notes');
            tbl
                .boolean('completed')
                .notNullable()
                .default(0);
            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
                .unique()

        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl
                .string('resource_name')
                .notNullable()
                .unique();
            tbl.string('resource_description')

        })
        .createTable('project_resources', tbl => {
            tbl.increments();

            tbl
                .integer('project_id')
                .unique()
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl
                .integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')


        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')

};
