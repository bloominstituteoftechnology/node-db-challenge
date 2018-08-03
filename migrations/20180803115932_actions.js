
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', table => {    
        table.increments('action_id');

        table.string('description', 512)
        .notNullable()

        table.string('notes')
        
        table
            .boolean('is_completed')
            .notNullable()
            .defaultTo(false)
        
        table
            .integer('project_id')
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
