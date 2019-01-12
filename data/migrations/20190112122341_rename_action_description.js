
exports.up = function(knex, Promise) {
    return knex.schema.hasTable('actions').then(exists=>{
        if(exists){
            return knex.schema.table('actions', table=>{
                table.renameColumn('description', 'action_description');
                table.renameColumn('is_completed', 'action_completed');
            })
        }
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('actions', table=>{
        table.renameColumn('action_description', 'description');
        table.renameColumn('action_completed', 'is_completed');
    })
};
