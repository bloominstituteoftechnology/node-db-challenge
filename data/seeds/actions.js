
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        { description: "mow the lawn", notes: "empty the lawnmower afterwards", completed: false, project_id: 1,  },
        { description: "take the trash out", notes: "put in a new trash bag", completed: false, project_id: 2,  },
        { description: "brush teeth", notes: "don't forget the toothpaste", completed: false, project_id: 2,  },
        
        
      ]);
    });
};