
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name:'feeding time', description:'feed the dragon', completed:false},
        {name:'cleaning', description:'clean the house', completed:false},
        {name:'sprint', description:'start to fridays sprint challenge', completed:true}
      ]);
    });
};
