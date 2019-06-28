
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('actions', tbl => {
        tbl.increments('id');

        tbl 
            .string('description')
            .string('notes')
            .boolean('completed')
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
