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

module.exports = projectRoute