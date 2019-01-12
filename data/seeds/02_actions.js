
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, action_description: "initialize project", action_notes: "don't forget to yarn init", action_completed: false},
        {project_id: 1, action_description: "set up structure", action_completed: false},
        {project_id: 1, action_description: "helpers", action_completed: false},
        {project_id: 1, action_description: "routers and endpoints", action_completed: false},
        {project_id: 1, action_description: "submit project", action_notes: "double check your work", action_completed: false},
        {project_id: 2, action_description: "get out the bread", action_notes: "whole wheat or whole grain", action_completed: false},
        {project_id: 2, action_description: "drain solid white tuna", action_completed: false},
        {project_id: 2, action_description: "mash avocado", action_notes: "add lemon juice and southwest chipotle seasoning", action_completed: false},
        {project_id: 2, action_description: "mix avocado and tuna", action_completed: false},
        {project_id: 2, action_description: "toast bread", action_completed: false},
        {project_id: 2, action_description: "spread tuna on bread", action_completed: false},
        {project_id: 2, action_description: "slice tomato and place on tuna", action_completed: false}
      ]);
    });
};
