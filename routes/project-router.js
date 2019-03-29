const router = require('express').Router()
const db = require('../data/dbConfig')

router.get('/', async (req, res)=> {
    try {
        const projects = await db('project');
        res.status(200).json({projects, message: 'Success'})
    }
    catch(error){
        res.status(500).json({message: 'Error retrieving projects', error})
    }
})


router.get("/:id", async (req, res) => {
    try {
      const project = await db
        .select("p.name", "p.description", "p.completed", "p.id")
        .from("project as p")
        .where({ "p.id": req.params.id })
        .first();
  
      const action = await db("action")
        .select("notes", "id", "description", "completed")
        .where({ id: req.params.id });
      res.status(200).json({ ...project, action });
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: "Not working" });
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const project = await db("project").insert(req.body);
      res.status(201).json(project);
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: "Not working" });
    }
  });
  
  module.exports = router;