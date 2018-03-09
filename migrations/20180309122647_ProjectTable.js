
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Projects', tbl => {
        tbl.increments();

        tbl
            .string('name', 180)
            .notNullable()
            .unique('name');
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
    return knex.schema.dropTableIfExists('Projects')
};
