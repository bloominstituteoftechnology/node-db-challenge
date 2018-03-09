
exports.up = function (knex, Promise) {
    return knex.schema.createTable('contexts', (ctx) => {
        ctx.increments('context_id');
        ctx.string('context', 50)
            .notNullable();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('contexts');
};
