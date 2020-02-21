
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries


      const tasks = [
        {id:1, description: "need to create github repo", notes: "", completed: false, project_id: 1},
        {id:2, description: "code on local host, test and then push it to prod", notes: "There is a lot to add so not writing anything here", completed: false, project_id:2}
        
      ]
      return knex('tasks').insert(tasks);
    });
};

