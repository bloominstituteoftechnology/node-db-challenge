
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('projects', table => {
            table.increments();

            table
                .string('name')
                .notNullable()
                .unique();

            table
                .string('description')
                .notNullable();

            table
                .boolean('completed')
                .notNullable();
        })

        .createTable('actions', table => {
            table.increments();

            table
                .string('description')
                .notNullable();

            table
                .string('notes')
                .notNullable();

            table
                .boolean('completed')
                .notNullable();

            table //FK pointing to project id
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('actions')
        .dropTableIfExists('projects');
};
