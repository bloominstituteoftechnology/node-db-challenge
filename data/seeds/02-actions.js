
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Create GUI using React', notes: 'Create special button', project_id:1,  complete:false},
        {description: 'Create 3 new projects', notes: 'Search internet for ideas ', project_id:2, complete:false},
        {description: 'Learn how to use animations', notes: 'Start with GreenSock', project_id:3, complete:true}
      ]);
    });
};
