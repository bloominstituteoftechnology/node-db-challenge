
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([

        {resource_name: 'blah', resource_description: 'dkjd'},
        {resource_name: 'bla', resource_description: 'dkj'},
        {resource_name: 'bl', resource_description: 'dk'},
        {resource_name: 'ah', resource_description: 'kj'},
      ]);
    });
};
