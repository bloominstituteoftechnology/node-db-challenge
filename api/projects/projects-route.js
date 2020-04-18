const projectRoute = require('express').Router();
const projectHelpers = require('./projects-model')


projectRoute.get('/status', (req, res) => {
    res.json({ projectRoute: "up" });
})

projectRoute.get('/', async (req, res) => {
    try {
        const projects = await projectHelpers.get();
        projects
        ? res.json(projects)
        : res.status(404).json({ message: 'no projects found' })
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message })
    }
})

projectRoute.get('/:projectId', async (req, res) => {
    const { projectId } = req.params

    try {
        const project = await projectHelpers.get(projectId);
        project
        ? res.json(project)
        : res.status(404).json({ message: 'no project found by that projectId'})
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message })
    }
})

projectRoute.post('/', async (req, res) => {
    const body = req.body;
    
    try {
        const inserted = await projectHelpers.insert(body);
        inserted
        ? res.status(201).json(inserted)
        : res.status(400).json({ message: 'error, not all data provided'})
    } catch (error) {
        res.status(500).json({ message: 'server error' , error: error.message })
    }
})

projectRoute.put('/:projectId', async (req, res) => {
    const changes = req.body;
    const { projectId } = req.params;

    try {
        const updated = await projectHelpers.update(projectId, changes);
        updated
        ? res.status(200).json(updated)
        : res.status(400).json({ message: 'error, not all data provided to update'})
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message })
    }
})

projectRoute.delete('/:projectId', async (req, res) => {
    const { projectId } = req.params;
    try {
        const deleted = await projectHelpers.remove(projectId)
        deleted
        ? res.status(204).json({ message: 'project deleted'}) 
        : res.status(200)
    } catch (error) {
        res.status(500).json({ message: 'server error', error: error.message })
    }
})

module.exports = projectRoute