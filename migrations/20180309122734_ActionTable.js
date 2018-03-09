
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Actions', tbl => {
        tbl.increments();

        tbl
            .string('description')
            .notNullable();
        tbl
            .string('notes')
            .notNullable();
        tbl
            .boolean('completed')
            .notNullable()
            .defaultTo(false);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Actions');
};
