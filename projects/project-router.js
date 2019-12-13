const 
    express = require("express"),
    Projects = require("./project-model"),
    router = express.Router();

router.get("/", (req, res) => {
    Projects
        .getProjects()
        .then(project => {
            project.map(item => item.completed === 1 ? item.completed = true : item.completed = false)
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: `Unable to contact server`})
        })
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    Projects
        .findProject(id)
        .then(project => res.status(200).json(project))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: `Unable to contact server`})
        })
});

router.get("/:id/tasks", (req, res) => {
    const id = req.params.id;

    Projects
        .getProjectTasks(id)
        .then(project => {
            project.map(item => item.completed === 1 ? item.completed = true : item.completed = false)
            res.status(200).json(project)
        })
           
        .catch(err => {
            console.log(err)
            res.status(500).json({message: `Unable to contact server`})
        })
});

router.get("/:id/resources", (req, res) => {
    const {id} = req.params;
    console.log(id)
    Projects
        .getProjectResources(id)
        .then(project => res.status(200).json(project))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: `Unable to contact server`})
        })
});

router.post("/", (req, res) => {
    const add = req.body;
    console.log(req)
    Projects
        .addProject(add)
        .then(project =>  res.status(201).json(project))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: `Unable to contact server`})
        })
})

router.post("/:id/tasks", (req, res) => {
    const
        id = req.params.id,
        task = req.body;
        

    Projects
        .findProject(id)
        .then(item => {
            console.log(task)
            return Projects
                .addTask({description: task.description, notes: task.notes, proj_id: id})
                .then(i => {
                    console.log(i)
                    res.status(201).json(task)
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: `Unable to contact server`})
        })
})


router.post("/:id/resources", (req, res) => {
    const
        id = req.params.id,
        resource = req.body;

    Projects
        .findProject(id)
        .then(() => {
            return Projects
                .addResource({p_id: id, name: resource.name, description: resource.description})
                .then(() => res.status(201).json(resource))
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: `Unable to contact server`})
        })
})



module.exports = router;