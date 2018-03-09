
exports.up = function (knex, Promise) {
    return knex.schema.createTable('contexts', (ctx) => {
        ctx.increments();

        ctx
            .string('context', 50)
            .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('contexts');
};
