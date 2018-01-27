exports.up = function(knex, Promise) {
    return knex.schema.createTable('Project_Contexts', function(tb1) {
        tb1
            .primary()
            .increments('id');
        tb1
            .integer('projectId').unsigned().references('id').inTable('Projects')
        tb1
            .integer('contextId').unsigned().references('id').inTable('Contexts')
        tb1.timestamp('createdAt').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Project_Contexts')
};