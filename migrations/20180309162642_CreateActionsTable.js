
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        tbl
            .primary()
            .increments('id');
        tbl
            .string('description', 255)
            .notNullable();
        tbl 
            .text('notes')
        tbl
            .boolean('completed')
            .notNullable()
            .defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
