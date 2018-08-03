exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', table => {
        table.increments('project_id');

        table.string('name', 256)
        .notNullable()
        .unique()
        
        table.string('description')
        .notNullable()
        
        table
            .boolean('is_completed')
            .notNullable()
            .defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');  
};
