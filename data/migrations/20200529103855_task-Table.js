
exports.up = function (knex) {
    return knex.schema
        .createTable('task', tbl => {
            tbl.increments();
            tbl.text('task_desc', 128)

                .notNullable();
            tbl.text('task_note', 128)

            tbl.integer('completed')
                .notNullable();

            tbl.integer('project_id')
                .references('id')
                .inTable('project')
                .unsigned()
                .notNullable();
        })
};
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('task')

};