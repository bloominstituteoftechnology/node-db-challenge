
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project_contexts', tbl => {
        tbl
            .primary()
            .increments('id');
        tbl
            .string('context', 255)
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project_contexts')
};
