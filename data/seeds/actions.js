exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Watch the RDBMS lectures', notes: "Make sure to read pre-class", completed: false, projectId: 1},
        {description: 'Do the RDBMS homework', notes: "Do stretch if possible", completed: false, projectId: 1},
        {description: 'Watch the Auth lectures', notes: "Green wall, baby!", completed: false, projectId: 2},
        {description: 'Do the Auth homework', notes: "Ask for help at standup", completed: false, projectId: 2}
      ]);
    });
};