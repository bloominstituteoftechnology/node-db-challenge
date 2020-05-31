
exports.up = function (knex) {
    return knex.schema
        .createTable('resource', tbl => {
            tbl.increments();
            tbl.text('resource_name', 128)
                .unique()
                .notNullable();
            tbl.text('resource_desc', 128)
        })

};
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resource')

};
