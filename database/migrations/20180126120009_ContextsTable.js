
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contexts', function(tbl) {
        tbl.increments();

        tbl
        .string('context', 260)
        .notNullable()
        .unique('conext');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.droptTableIfExists('contexts');
};
