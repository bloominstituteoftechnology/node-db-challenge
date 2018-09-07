
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_name: 'open vscode', notes: "here's a note", description: "click here, click there", project_id: 1},
        {action_name: 'type many things', description: "type, type, everywhere", project_id: 1},
        {action_name: 'check if it works', description: "are you sure your server is running?", project_id: 1},
        {action_name: 'go into kitchen', description: "use legs here", project_id: 2},
        {action_name: 'make some food', notes: "lil note", description: "really anything will do", project_id: 2},
        {action_name: 'eat happily', description: "finally, also make some tea", project_id: 2},
        {action_name: 'create PR', description: "back to github", project_id: 3},
        {action_name: 'make final push', description: "oh how to describe a push", project_id: 3},
        {action_name: 'take a nap', notes: "just a note", description: "you probably won't, but should", project_id: 3}
      ]);
    });
};
