exports.seed = function(knex) {
  return knex("projects")
      .del()
      .then(function() {
          return knex("projects").insert([
              {
                  id: 1,
                  name: "Make Coffee",
                  description: "sugar in the back",
                  completed: true
              },
              {
                  id: 2,
                  name: "make pizza",
                  description: "cheese in the fridge",
                  completed: true
              },
              {
                  id: 3,
                  name: "make chips",
                  description: "bags in the cabnet",
                  completed: true
              },
              {
                  id: 4,
                  name: "make candy",
                  description: "bags in the drawer",
                  completed: false
              }
          ]);
     
        });
    };
