
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name:'Build a bear', description:'Assemble a bear from parts'},
        {id: 2, name:'Make Dinner', description:'Make chick parm for family'},
        {id: 3, name:'Wash laundry', description:'laundry has been piling up'}
      ]);
    });
};
