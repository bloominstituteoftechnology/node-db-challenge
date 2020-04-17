exports.seed = function (knex) {
  return knex('resources')
    .truncate()
    .then(function () {
      return knex('resources').insert([
        {
          resource_name: 'Computer',
          resource_description: 'Tool used to write code',
        },
        {
          resource_name: 'VSCode',
          resource_description: 'source-code editor',
        },
        {
          resource_name: 'NPM',
          resource_description: 'dependecy installer',
        },
        {
          resource_name: 'CSS',
          resource_description: 'Coding Language',
        },
        {
          resource_name: 'React',
          resource_description: 'JavaScript Libary',
        },
      ]);
    });
};
