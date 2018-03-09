exports.up = function (knex, Promise) {
    return knex.schema.createTable('projectTracker', pt => {
        pt.increments();
        pt.integer('project_id').unsigned().references('id').inTable('projects');
        pt.integer('action_id').unsigned().references('id').inTable('actions');
        pt.integer('context_id').unsigned().references('id').inTable('contexts');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('projectTracker');
};