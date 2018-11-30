
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { decription: 'study', notes: "did you study today?", project_id: 1 },
        { decription: 'stretch', notes: "did you stretch today?", project_id: 2 },
        { decription: 'pullup', notes: "be able to do 5 pullups in a row", project_id: 2 }
      ]);
    });
};
