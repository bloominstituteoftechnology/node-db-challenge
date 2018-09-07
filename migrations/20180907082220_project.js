exports.up = function (knex, Promise) {
    return knex.schema.createTable('project', tbl => {
        tbl
            .increments()
            .unique();
        tbl
            .string('name')
            .notNullable();
        tbl
            .string('description')
            .notNullable();
        tbl
            .boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('project');
};