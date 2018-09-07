
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name:'Borrow the Car'},
        {name:'Go see Laura'},
        {name:'Order potbellied pigs'},
      ]);
    });
};
