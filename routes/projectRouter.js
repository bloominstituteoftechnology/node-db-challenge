const router = require("express").Router();
const project = require("../controllers/projectController.js");

// below 3 lines are for knex usage
const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

router.post("/project", project.addProject);
router.post("/action", project.addAction);

// using async way of doing HTTPs calls
router.get("/project/:id", async (req, res) => {
  try {
    const actions = await db("projects")
      .innerJoin("actions", { "projects.id": "actions.project_id" })
      .select("*")
      .where("projects.id", req.params.id);

    //   console.log('actions =', actions);

    const project = await db("projects").where({ id: req.params.id });
    // console.log('project =', project);

    project[0].actions = actions;

    project.length !== 0
      ? res.status(200).json({ ...project[0] })
      : res
          .status(404)
          .json({ errorMessage: "A project with that ID could not be found." });
  } catch (err) {
    res
      .status(500)
      .json({ error: "The project information could not be retrieved.", err });
  }
});

router.get("/project", project.getProject);

module.exports = router;
