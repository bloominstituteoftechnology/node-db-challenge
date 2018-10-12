
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'rowValue1', notes: 'yyyyyyyyyyyyy', finished: true, project_key: 2},
        {description: 'rowValue2', notes: 'xxxxxxxxxxxxx', finished: false, project_key: 3},
        {description: 'rowValue3', notes: 'zzzzzzzzzzzzzz', finished: false, project_key: 1},
        {description: 'rowValue1', notes: 'yyyyyyyyyyyyy', finished: true, project_key: 2},
        {description: 'rowValue2', notes: 'xxxxxxxxxxxxx', finished: false, project_key: 3},
        {description: 'rowValue3', notes: 'zzzzzzzzzzzzzz', finished: false, project_key: 4}
      ]);
    });
};
