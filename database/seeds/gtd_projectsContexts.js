
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ProjectsContexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('ProjectsContexts').insert([
        {projectId: 1, contextId: 1},
        {projectId: 1, contextId: 2},     
        {projectId: 1, contextId: 3},      
        {projectId: 2, contextId: 1}, 
        {projectId: 3, contextId: 1},                     
      ]);
    });
};
