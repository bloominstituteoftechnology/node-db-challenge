
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context: 'hobby', project_id: 1, action_id: 1 },
        {id: 2, context: 'hobby', project_id: 1, action_id: 2 },
        {id: 3, context: 'hobby', project_id: 1, action_id: 3 },
        {id: 4, context: 'Calligraphy', project_id: 1, action_id: 2 },
        {id: 5, context: 'Calligraphy', project_id: 1, action_id: 1 },
        {id: 6, context: 'Calligraphy', project_id: 1, action_id: 3 },
        {id: 7, context: 'at home', project_id: 1, action_id: 3 },
        {id: 8, context: 'at home', project_id: 2, action_id: 4 },
        {id: 9, context: 'on computer', project_id: 2, action_id: 5 },
        {id: 10, context: 'coding', project_id: 2, action_id: 6 },
        {id: 11, context: 'at home', project_id: 3, action_id: 8 },
        {id: 12, context: 'hobby', project_id: 3, action_id: 9 },
      ]);
    });
};
