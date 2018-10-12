
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(table) {
        table.increments();    
    
        table.string('description', 255).notNullable();
    
        table.string('notes', 100).notNullable();
    
        table
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects');
    
        table.boolean('completed').defaultTo(false);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('actions')
};
