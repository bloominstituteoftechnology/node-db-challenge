
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', (prj) => {
        prj.increments('project_id');
        prj.string('name', 50)
            .notNullable();
        prj.string('description', 256);
        prj.boolean('project_complete')
            .defaultTo(false);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};