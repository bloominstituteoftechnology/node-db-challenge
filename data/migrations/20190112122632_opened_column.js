
exports.up = function(knex, Promise) {
    return knex.schema.table('action', table =>{
        table.integer('project_id').unsigned();
        table.foreign('project_id').references(id).on('project')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('action', table =>{
        table.dropColumn('project_id')
    })
};
