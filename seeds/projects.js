exports.seed = function(knex, Promise){
    // Deletes ALL existing entries
    return knex('projects').truncate().then(function(){
        // Inserts seed entries
        return knex('projects').insert([
            { name: 'rowValue1', description: 'value', project_completed: false },
            { name: 'rowValue2', description: 'value', project_completed: false },
            { name: 'rowValue3', description: 'value', project_completed: false },
        ])
    })
}
