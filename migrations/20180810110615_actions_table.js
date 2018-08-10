
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', action => {
        action.increments();
        action
            .string('description')
            .notNullable()
            .unique();
        action
            .string('notes')

        action 
            .integer('projectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
    })
};

exports.down = function(knex, Promise) {
  
};
