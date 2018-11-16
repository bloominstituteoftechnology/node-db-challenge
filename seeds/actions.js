exports.seed = function(knex, Promise){
    // Deletes ALL existing entries
    return knex('actions').truncate().then(function(){
        // Inserts seed entries
        return knex('actions').insert([
            { action_description: 'rowValue1', notes: 'value', action_completed: false, project_id: 1 },
            { action_description: 'rowValue2', notes: 'value', action_completed: false, project_id: 2 },
            { action_description: 'rowValue3', notes: 'value', action_completed: false, project_id: 3 },
            { action_description: 'rowValue1', notes: 'value', action_completed: false, project_id: 1 },
            { action_description: 'rowValue2', notes: 'value', action_completed: false, project_id: 2 },
            { action_description: 'rowValue3', notes: 'value', action_completed: false, project_id: 3 },
            { action_description: 'rowValue1', notes: 'value', action_completed: false, project_id: 1 },
            { action_description: 'rowValue2', notes: 'value', action_completed: false, project_id: 2 },
            { action_description: 'rowValue3', notes: 'value', action_completed: false, project_id: 3 },
            { action_description: 'rowValue1', notes: 'value', action_completed: false, project_id: 1 },
            { action_description: 'rowValue2', notes: 'value', action_completed: false, project_id: 2 },
            { action_description: 'rowValue3', notes: 'value', action_completed: false, project_id: 3 },
        ])
    })
}
