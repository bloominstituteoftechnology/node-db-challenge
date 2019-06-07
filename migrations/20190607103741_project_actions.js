
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project_actions', function(tbl){
    tbl.increments();
    tbl.integer('projects_id')
    tbl.integer('actions_id')
    tbl.foreign('projects_id').references('projects.id')
    tbl.foreign('actions_id').references('project.id')

})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project_actions')
};
