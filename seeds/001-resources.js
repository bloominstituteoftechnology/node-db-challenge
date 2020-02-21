
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      const resources = [
        {id:1, name: "computer",description: "Mac book pro with retina display. touch id on the key pad"},
        {id:2, name: "conference room",description: "Conference room has space for 16 people with live conferencing enabled"},
        {id:3, name: "admin access",description: "Need admin access to do anything"}
      ]
      return knex('resources').insert(resources);
    });
};
