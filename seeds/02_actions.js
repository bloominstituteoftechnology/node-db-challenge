
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Actions').insert([
        {
          id: 1,
          description: "Build Townhouse",
          notes: "Use White Brick for the exterior",
          completed: "True"
        },
        {
          id: 2,
          description: "Build Great Room, Bathroom, and Murphy Bed",
          notes: "Use pine wood",
          completed: "False"
        },
       {
          id: 3,
          description: "Build Tiny House on trailer wheels",
          notes: "Add Barn Door to Bathroom",
          completed: "True"
        },
      ]);
    });
};
