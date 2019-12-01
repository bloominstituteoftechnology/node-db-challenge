

exports.up = function (knex) {
    return knex.schema
        .createTable('projects', (tbl) => {
            tbl.increments()
            tbl.string('projects_name', 128)
                .notNullable();
            tbl.string('description');
            tbl.boolean('completed')
                .notNullable();


        })
        .createTable('resources', (tbl) => {
            tbl.increments()
            tbl.string('resource_name', 128)
            tbl.integer('projects_id')
                .unsigned()
                .notNullable()
                .references('projects.id')

        })
        .createTable('tasks', (tbl) => {
            tbl.increments();
            tbl.string('description', 128).notNullable();
            tbl.boolean('completed').notNullable();
            tbl.integer('projects_id')
                .unsigned()
                .notNullable()
                .references('projects.id')



        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projecst')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks');

};
