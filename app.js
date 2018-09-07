'use strict'

const dbModel = require('./db/dbHelper/model')

// dbModel.get(`actions`)
//     .then(data => {
//         console.log(`actions Data`)
//         console.log(data)
//     })

// dbModel.addAction({
//     name: 'Random action',
//     description: 'No description',
//     flag: 1,
//     notes: 'No notes',
//     project_id: 1
// }).then (data => {
//     console.log(`Added`)
//     console.log(data)
// })

dbModel.getAction(1)
    .then(data => {
        console.log(`Action data`)
        console.log(data)
    })

/*
    projects.name as project_name,
		projects.description as projects_description,
		projects.flag as projects_flag,
		actions.name as actions_name,
		actions.description as actions_description,
		actions.notes as action_notes,
		actions.flag as actions_flag
*/
