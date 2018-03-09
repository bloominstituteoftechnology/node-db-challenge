
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Contexts', tbl => {
        tbl.increments();

        tbl
            .string('context', 90)
            .notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Contexts');
};
