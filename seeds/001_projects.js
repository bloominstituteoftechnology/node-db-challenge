
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name:'FirstProject', description: 'Tote bag fashion axe cloud bread'},
        {name: 'SecondProject', description: 'Synth bicycle rights mumblecore prism'},
        {name: 'ThirdProject', description: 'Health goth vaporware gentrify leggings'}
      ]);
    });
};
