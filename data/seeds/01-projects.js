
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name:  'html project', description: 'do some html on a page'},
        {name: 'javascript project', description: 'do some javascript on a page'},
        {name: 'react project', description: 'do some react on a page'}
      ]);
    });
};
