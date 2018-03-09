
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
        tbl
            .primary()
            .incredments('id');

        tbl
            .string('project_name', 255)
            .notNullable()
            .unique('project_name', 'uq_project_name');
        tbl
            .string('description')
            .notNullable();
        tbl
            .boolean('completed')
            .notNullable()
            .defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
