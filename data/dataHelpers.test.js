const db = require('./dataHelpers.js')



const testAction = {
  description: 'build an email form',
  notes: 'use backend',
  completed: false,
  project_id: 1
}

db.addAction(testAction).then(id => console.log(id))
.catch(err => console.log(err))
const testProject = {
  name: 'build a house',
  description: 'construction',
  completed: false,
}

db.addProject(testProject).then(id => console.log(id))
.catch(err => console.log(err))

db.getProjectActions(1).then(id => console.log(id))
.catch(err => console.log(err))