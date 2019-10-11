
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name').notNullable()
        tbl.text('description')
        tbl.boolean('completed').defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name').notNullable().unique()
        tbl.text('description')
    })
    .createTable('p_r', tbl => {
        tbl.increments()
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl 
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('SET NULL')
            .onUpdate('CASCADE');
        tbl
            .string('location')
        tbl.unique(['project_id', 'resource_id', 'location']);

    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('p_r')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
