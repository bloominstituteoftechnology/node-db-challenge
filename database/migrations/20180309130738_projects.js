
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', (prj) => {
        prj.increments();

        prj
            .string('name', 180)
            .notNullable()
            .unique('name');
        prj
            .string('description', 256)
            .notNullable();
        prj
            .boolean('project_completed')
            .defaultTo(false);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};