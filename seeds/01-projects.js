
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Learn SQL', description: 'But why couldnt we just learn MongoDB?'},
        {name: 'Learn MongoDB', description: 'Will do this in my free time'},
      ]);
    });
};
