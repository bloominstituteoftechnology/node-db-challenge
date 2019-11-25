exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
      {
          id:1,
          name: 'Kichen',
          description:'Wash Dishes',
          completed:false
      },
      {
          id:2,
          name:'Bedroom',
          description:'Goto Sleep',
          completed:false
      },
      {
          id:3,
          name:'LivingRoom',
          description:'Watch GOT',
          completed:false
      }
      ]);
    });
};
