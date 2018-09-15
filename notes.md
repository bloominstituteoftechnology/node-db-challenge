// Knex code
let = returnedProject;
let = returnedArray;

db('projects').select().where({ id: id})
    .then((project) => { 
        returnedProject = project[0];
    });

/*
At this point, returnedProject will look like this:
returnedProject = {
    project_id: 1,
    name: 'foo',
    description: 'bar',
    completed: 0
};
*/


// Knex code
db('actions').select().where({ project_id: id })
    .then((actions) => {
        returnedArray = actions;
    });

/*
At this point, returnedActions will look like this:
returnedActions = [
    {
        action1: 'cool',
    },
    {
        action2: 'nice',
    }
];
*/


returnedProject.actions = returnedActions;

/*
At this point, returnedProject will look like this:
=> returnedProject = {
    project_id: 1,
    name: 'foo',
    description: 'bar',
    completed: 0,
    actions: [
        {
            action1: 'cool',
        },
        {
            action2: 'nice',
        }
    ],
}

*/

res.send(200).json(returnedProject);