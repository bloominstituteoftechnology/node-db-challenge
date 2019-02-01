
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(table){
        table.increments('id');
        table.string('description').notNullable();
        table.text('additional_info')
        table.boolean('completed').defaultTo(false);
        table.integer('project_id').notNullable().unsigned();
        table.foreign('project_id').references('id').on('projects')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};


