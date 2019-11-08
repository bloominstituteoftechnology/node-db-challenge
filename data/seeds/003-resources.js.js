
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {
      resource_name: 'resource 1',
      resource_description: 'Reveiew resource 1'
    },
    {
      resource_name: 'resource 2',
      resource_description: 'Reveiew resource 2'
    },
    {
      resource_name: 'resource 3',
      resource_description: 'Reveiew resource 3'
    },
    {
      resource_name: 'resource 4',
      resource_description: 'Reveiew resource 4'
    },
    {
      resource_name: 'resource 5',
      resource_description: 'Reveiew resource 5'
    },
    {
      resource_name: 'resource 6',
      resource_description: 'Reveiew resource 6'
    },
    {
      resource_name: 'resource 7',
      resource_description: 'Reveiew resource 7'
    }
  ])

};
