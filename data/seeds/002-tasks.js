exports.seed = function(knex, Promise) {
  return knex("tasks").insert([
    {
      task_desc: "Check if power cord is plugged in",
      task_note: "Plug it in if it isn't",
      task_completed: true,
      project_id: 1
    },
    {
      task_desc: "Press the power button",
      task_note: "If this doesn't work, goodluck to you!!!!",
      task_completed: false,
      project_id: 1
    },
    {
      task_desc: "Open the program that is giving you issues.",
      task_note: "",
      task_completed: true,
      project_id: 2
    },
    {
      task_desc: '"Run" your program',
      task_note:
        "yarn server run, yarn/npm start, click the 'Go Live' option, etc.",
      task_completed: true,
      project_id: 2
    },
    {
      task_desc: "Read the errors that come up, and fix them.",
      task_note: "This may create new errors to pop up.",
      task_completed: false,
      project_id: 2
    },
    {
      task_desc: "Fix any errors that arise from previous step.",
      task_note: "Repeat as necessary.",
      task_completed: false,
      project_id: 2
    }
  ]);
};
