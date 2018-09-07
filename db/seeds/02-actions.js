
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate() //truncate resets the ids, del() continures the counr for new Ids
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: "interior", notes:"vacume..."},
        {project_id: 1, description: "exterior", notes:"vacume..."},
        {project_id: 2, description: "mop", notes:"vacume..."},
        {project_id: 2, description: "dust", notes:"vacume..."},
        {project_id: 3, description: "science", notes:"vacume..."},
        {project_id: 3, description: "math", notes:"vacume..."},
      ]);
    });
};
