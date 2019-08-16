
exports.up = function (knex) {
    return knex.schema
        .creaTable('project', tbl => {
            tbl.increments();

            tbl
                .string('project_name', 255)
                .notNullable()
                .unique()
            tbl
                .text('description')
            tbl
                .boolean('complete').defaultTo(false)

        })
        .creaTable('task', tbl => {
            tbl.increments();

            tbl
                .string('task_name', 255)
                .notNullable()
                .unique()
            tbl
                .text('description')
            tbl
                .boolean('complete').defaultTo(false)

        })
        .creaTable('resource', tbl => {
            tbl.increments();

            tbl
                .integer('project_id', 255)
                .notNullable()
                .unique()
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl
                .integer('task_id', 255)
                .notNullable()
                .unique()
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('task')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        });
};
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resource')
        .dropTableIfExists('task')
        .dropTableIfExists('project')

};
