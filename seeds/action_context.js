exports.seed = function(knex, Promise){
    // Deletes ALL existing entries
    return knex('actioncontext').truncate().then(function(){
        // Inserts seed entries
        return knex('actioncontext').insert([
            { action_id: 2, context_id: 2 },
            { action_id: 2, context_id: 2 },
            { action_id: 2, context_id: 2 },
        ])
    })
}
