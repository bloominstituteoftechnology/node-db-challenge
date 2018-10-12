
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        { Project: 'Make website', Description: "yeet", complete: true },
        { Project: 'Make pizza', Description: "yeet", complete: true },
        { Project: 'Go to sleep', Description: "yeet", complete: true }
      ]);
    });
};
