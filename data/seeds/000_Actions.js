
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Actions').insert([
        {Description: "Open Ticket", Notes:""},
        {Description: "Move To InProgress", Notes:""},
        {Description: "Move To Done", Notes:""}
      ]);
    });
};
