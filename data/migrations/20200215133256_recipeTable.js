exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

            tbl.varchar('name', 255)
                .notNullable()
                .index();

            tbl.varchar('description', 500)

            tbl.boolean('completed')
                .defaultTo(false)
                .notNullable();
        })
        .createTable('resources', tbl => {
            tbl.increments();

            tbl.varchar('name', 255)
                .unique()
                .notNullable()
                .index();

            tbl.varchar('description', 500)
        })
        .createTable('tasks', tbl => {
            tbl.increments();

            tbl.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

            tbl.varchar('description', 500)
                .notNullable();

            tbl.varchar('notes', 1000)

            tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
        })
        .createTable('projects_resources', tbl => {

            tbl.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

            tbl.integer('resources_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        })

};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};