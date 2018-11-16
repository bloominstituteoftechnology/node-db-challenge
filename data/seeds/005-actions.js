
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { notes: ' notes content 1', description : 'action 1 ' , project_id :1  },
        { notes: ' notes content 2', description : ' action  2 ' , project_id :2 },
        { notes: ' notes content 3', description : 'action  3 ', project_id : 3 }
      ]);
    });
};
