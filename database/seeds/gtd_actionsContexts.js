
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ActionsContexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('ActionsContexts').insert([
        {actionId: 1, contextId: 1},
        {actionId: 1, contextId: 2},
        {actionId: 1, contextId: 3},  
        {actionId: 2, contextId: 1},
        {actionId: 2, contextId: 2},
        {actionId: 2, contextId: 3},  
        {actionId: 3, contextId: 1},
        {actionId: 3, contextId: 2},
        {actionId: 3, contextId: 3},   
        {actionId: 4, contextId: 1},       
        {actionId: 5, contextId: 1},   
        {actionId: 6, contextId: 1},                                         
      ]);
    });
};
