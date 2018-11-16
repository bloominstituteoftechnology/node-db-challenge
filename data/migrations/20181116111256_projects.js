
exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl
            .string('project', 255)
            .notNullable();
        tbl
            .string('description');
        tbl
            .boolean('Completed')
            .defaultTo(0);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
