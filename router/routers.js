const express = require('express');
const routerProjects = express.Router();
const routerActions = express.Router();
const TaskManager = require('../TaskManager/TaskManager.js')



// routes for PROJECTS
routerProjects.get('/', TaskManager.getAllProjects);
routerProjects.get('/:id', TaskManager.getprojectsbyId);
routerProjects.post('/', TaskManager.CreateNewProject);
routerProjects.delete('/:id', TaskManager.DestroyProject);
routerProjects.put('/:id', TaskManager.UpdateProject);


// routes for ACTIONS
routerActions.get('/', TaskManager.getAllActions);
routerActions.post('/', TaskManager.CreateNewAction);
routerActions.delete('/:id', TaskManager.DestroyAction);
routerActions.put('/:id', TaskManager.UpdateAction);


module.exports = {
    routerProjects : routerProjects,
    routerActions : routerActions
};