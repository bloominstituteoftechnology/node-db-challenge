exports.seed = function(knex) {
  return knex("task")
      .del()
      .then(function() {
          return knex("task").insert([
              {
                  id: 1,
                  description: "find the hidden coffee",
                  notes: "its here somewhere",
                  completed: true,
                  project_id: 1
              },
              {
                  id: 2,
                  description: "buy more pepperoni",
                  notes: "for the coffee, not the pizza",
                  completed: true,
                  project_id: 1
              },
              {
                  id: 3,
                  description: "buy a second bag of pepperoni",
                  notes: "these ones are for the pizza",
                  completed: true,
                  project_id: 2
              },
              {
                  id: 4,
                  description: "fix tasks",
                  notes: "tasks are assigned to the wrong projects",
                  completed: true,
                  project_id: 2
              },
              {
                  id: 5,
                  description: "sleep",
                  notes: "i should have a lil more",
                  completed: true,
                  project_id: 3
              },
              {
                  id: 6,
                  description: "buy chips and fries",
                  notes: "should make sure to have both",
                  completed: true,
                  project_id: 3
              },
              {
                  id: 7,
                  description: "consume cheese",
                  notes: "someones gotta",
                  completed: false,
                  project_id: 4
              }
          ]);
      });
};