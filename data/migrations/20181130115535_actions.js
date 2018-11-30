exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {
        // Primary Key
        table.increments('id');
        // Description - required
        table.string('description', 255).notNullable();
        // Notes - required
        table.text('notes').notNullable();
        // Complete Flag
        table.boolean('complete');
        // Foreign Key to Projects
        table
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects');
    });
};

exports.down = function(knex, Promise) {};

// Ad