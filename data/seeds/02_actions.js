
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Actions').insert([
        { Description: 'rowValue1', Notes: 'yeet', project_id: 1 },
        { Description: 'rowValue1', Notes: 'yeet', project_id: 1 },
        { Description: 'rowValue1', Notes: 'yeet', project_id: 1 },
        { Description: 'rowValue2', Notes: 'yeet', project_id: 2 },
        { Description: 'rowValue2', Notes: 'yeet', project_id: 2 },
        { Description: 'rowValue2', Notes: 'yeet', project_id: 2 },
        { Description: 'rowValue3', Notes: 'yeet', project_id: 3 },
        { Description: 'rowValue3', Notes: 'yeet', project_id: 3 },
        { Description: 'rowValue3', Notes: 'yeet', project_id: 3 },
      ]);
    });
};
