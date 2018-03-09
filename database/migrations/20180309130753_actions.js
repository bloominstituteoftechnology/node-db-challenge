
exports.up = function (knex, Promise) {
    return knex.schema.createTable('actions', (act) => {
        act.increments('action_id');
        act.string('project_action', 128)
            .notNullable();
        act.string('description', 256);
        act.boolean('completed')
            .defaultTo(false);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
