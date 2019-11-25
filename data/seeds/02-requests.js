exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
      {
          id:1,
          ResourceName: 'Kitchen',
          ResourceDescription: 'Where you make food'
      },
      {
          id:2,
          ResourceName: 'Bedroom',
          ResourceDescription: 'Where you sleep'
      },
      {
          id:3,
          ResourceName: 'LivingRoom',
          ResourceDescription: 'Where you watch TV'
      }
      ]);
    });
};