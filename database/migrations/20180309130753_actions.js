
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', (act) => {
        act.increments();
        act
            .string('description')
            .notNullable();
        act
            .string('notes')
            .notNullable();
        act
            .boolean('completed')
            .defaultTo(false);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
