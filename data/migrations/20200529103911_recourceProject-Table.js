
exports.up = function (knex) {
    return knex.schema
        .createTable('resourceProject', tbl => {
            tbl.increments();

            tbl.integer('project_id')
                .references('id')
                .inTable('project')
                .unsigned()
                .notNullable();

            tbl.integer('resource_id')
                .references('id')
                .inTable('resource')
                .unsigned()
                .notNullable();
        })
};
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resourceProject')

};