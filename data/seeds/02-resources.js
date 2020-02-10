
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      id: 1, 
      resource_name: 'Wikipedia',
      resource_desc: 'Wikipedia description'
    },
    {
      id: 2, 
      resource_name: 'Lambda',
      resource_desc: 'Lambda description',
    },
    {
      id: 3, 
      resource_name: 'Google',
      resource_desc: 'Google description'
    },
  ]);
};
