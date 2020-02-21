
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries


const projects = [
  {id:1, name: "project 1",description: "Description for project 1",completed: false},
  {id:2, name: "project 2",description: "Description for project 2",completed: false},
  {id:3, name: "project 3",description: "Description for project 3",completed: false}
]
      return knex('projects').insert(projects);
    });
};

