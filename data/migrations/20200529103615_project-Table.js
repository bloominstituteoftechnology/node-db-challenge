
exports.up = function (knex) {
    return knex.schema
        .createTable('project', tbl => {
            tbl.increments();
            tbl.text('project_name', 128)
                .unique()
                .notNullable();
            tbl.text('project_desc')

            tbl.integer('completed')
                .notNullable();
        })

};
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project')

};
