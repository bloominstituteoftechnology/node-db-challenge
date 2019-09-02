
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projects_name:  'html project', projects_description: 'do some html on a page'},
        {projects_name: 'javascript project', projects_description: 'do some javascript on a page'},
        {projects_name: 'react project', projects_description: 'do some react on a page'}
      ]);
    });
};
