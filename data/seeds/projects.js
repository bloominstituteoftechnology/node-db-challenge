
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Surfin Safari', description: 'desc a', finished: false},
        {name: 'Surfing USA', description: 'desc b', finished: true},
        {name: 'Living in my room', description: 'desc c', finished: true}
      ]);
    });
};
