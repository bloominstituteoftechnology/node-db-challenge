
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', tbl => {
        tbl.increments('id').unique('id');
        tbl.integer('project_id').references('id').inTable('projects');
        tbl
            .string('action_description');
        tbl
            .string('notes');
        tbl
            .boolean('completed')
            .defaultTo(false);

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
