exports.seed = function(knex, Promise){
    // Deletes ALL existing entries
    return knex('contexts').truncate().then(function(){
        // Inserts seed entries
        return knex('contexts').insert([
            { name: 'at work', action_id: 3 },
            { name: 'at school', action_id: 2 },
            { name: 'at home', action_id: 3 },
            { name: 'at work', action_id: 1 },
            { name: 'at school', action_id: 2 },
            { name: 'at home', action_id: 1 },
            { name: 'at work', action_id: 1 },
            { name: 'at school', action_id: 2 },
            { name: 'at home', action_id: 2 },
            { name: 'at work', action_id: 1 },
            { name: 'at school', action_id: 3 },
            { name: 'at home', action_id: 3 },
        ])
    })
}
