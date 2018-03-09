
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', (prj) => {
        prj.increments(project_id);

        prj
            .string('name', 180)
            .notNullable()
            .unique('name');
        prj
            .string('description', 256)
            .notNullable();
        prj
            .boolean('project_complete')
            .defaultTo(false);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};