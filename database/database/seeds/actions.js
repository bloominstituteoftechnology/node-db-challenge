
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'asfasdf',notes:'sdfasd',completed:false, project_id:1},
        {id: 2, description: 'afsdjkj',notes:'I go with 2',completed:false, project_id:2},
        {id: 3, description: 'fasdlfkj',notes:"asdfjklf",completed:false, project_id:3}
      ]);
    });
};