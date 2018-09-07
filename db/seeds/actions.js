
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          desc: 'Build out the iOS App system',
          notes: "Work on this for 2 hours", 
          project_id: 2,  
        },
      ]);
    });
};
