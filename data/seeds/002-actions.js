
exports.seed = function (knex, Promise) {
  return knex('actions').insert([
    {description: "GoofyGoober song", notes: 'Nothing here', completed: false, project_id: 1 },
    {description: 'Time to get jacked...and tan', notes: 'Bench Boiz', completed: true, project_id: 2 },
    {description: 'Hide in a vault', notes: 'Nothing here', completed: true, project_id: 3 }
  ]);
};
