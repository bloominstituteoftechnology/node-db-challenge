
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {context: 'anywhere'}, //1
        {context: 'home'}, //2
        {context: 'work'}, //3
        {context: 'computer'} //4
      ]);
    });
};
