
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'asfasdf',notes:'sdfasd',completed:false},
        {id: 2, description: 'afsdjkj',notes:'ffsjkl',completed:false},
        {id: 3, description: 'fasdlfkj',notes:"asdfjklfads",completed:false}
      ]);
    });
};