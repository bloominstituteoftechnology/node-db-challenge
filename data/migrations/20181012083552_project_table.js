
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Projects', tbl => {
        tbl.increments();

        tbl.string('Project', 128).notNullable()
        tbl.string('Description', 128).notNullable()
        tbl.boolean("complete").defaultTo(false);
    })

};

exports.down = function (knex, Promise) {
return knex.schema.dropTableIfExists('Projects')

};
