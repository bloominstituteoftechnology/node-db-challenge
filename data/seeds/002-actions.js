
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {notes: 'for car, get stuff', description_todo: "buy oil", project_id: 1, completed: false},
        {notes: 'for house, get stuff', description_todo: "buy wood", project_id: 2, completed: false},
        {notes: 'for boat, get stuff', description_todo: "buy fiberglass", project_id: 3, completed: false}
      ]);
    });
};
