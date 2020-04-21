
exports.seed = async function(knex) {
 
      await knex('task').insert([
        {
          project_id: 1,
          description: "Tried finishing homework.",
          notes: "Clone repo of node db4 project from github",
          completed: false
        },
        {
          project_id: 1,
          description: "Installed dependencies",
          notes: "need npm, nodemon, knex, sqlite3",
          completed: false
        },
        {
          project_id: 1,
          description: "Need to install sqlite3 to view db3 files",
          notes: "check table field after running migrations",
          completed: false
        },
        {
          project_id: 2,
          description: "Cleaning floors",
          notes: "Need to sweep kitchen, bathroom, and laundry floors",
          completed: false
        },
        {
          project_id: 2,
          description: "Cleaning Dishes",
          notes: "check for all dishes kept in living room",
          completed: false
        },
      ])
    
};
