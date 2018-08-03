
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {
          "id": 1,
          "context": "at home",
          "actionId": 1
      },
      {
          "id": 2,
          "context": "at work",
          "actionId": 1
      },
      {
          "id": 3,
          "context": "at computer",
          "actionId": 1
      }
      ]);
    });
};
