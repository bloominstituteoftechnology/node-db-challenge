
exports.seed = function (knex) {
  return knex('resources').insert([
    {
      resource_name: 'Computer',
      resource_description: 'Required',
    },
    {
      resource_name: 'Conference Room',
      resource_description: 'Optional',
    },
    {
      resource_name: 'Microphone',
      resource_description: 'Required',
    },
    {
      resource_name: 'Internet Access',
      resource_description: 'Required',
    },
    {
      resource_name: 'Website Hosting',
      resource_description: 'Optional',
    },
  ]);
};
