
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects_actions', PtoA => {
        PtoA.increments();
        
        PtoA
            .integer('projectId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')

        PtoA
            .integer('actionId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('actions')
    })
};

exports.down = function(knex, Promise) {
  
};
