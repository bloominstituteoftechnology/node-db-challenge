const db = require("../../data/dbConfig");

function addTask(task, project_id) {
  return db("tasks")
    .insert({ ...task, project_id })
    .then(id => db("tasks").where({ id: id[0] }));
}

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "project_id")
    .select(
      "t.description as task description",
      "notes",
      "t.completed",
      "p.name as project name"
    );
}

function getTaskContexts(task_id) {
  return db("contexts as c")
    .join("task-contexts as tc", "tc.context_id", "c.id")
    .select("c.context")
    .where({ task_id });
}

function getTaskById(id) {
  const promises = [
    db("tasks")
      .where({ id })
      .first(),
    getTaskContexts(id)
  ];

  return Promise.all(promises).then(output => {
    const [task, contexts] = output;

    return { ...task, contexts };
  });
}

module.exports = {
  getTasks,
  addTask,
  getTaskById,
  getTaskContexts
};
