exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 500);
    })
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255);
        tbl.string('description', 500);
        tbl.boolean('completed').defaultTo(0).notNullable();
    })
    .createTable('project_resources', tbl => {
        tbl.primary(['project_id', 'resource_id']);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('name', 500).notNullable();
        tbl.string('description', 500);
        tbl.boolean('completed').defaultTo(0).notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    });
        
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('projects')
        .dropTableIfExists('resources');
};