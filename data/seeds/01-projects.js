
exports.seed = function(knex) {
  return knex('projects').insert([
    
        { 
          project_name: 'Build ManCave', 
          description: 'Place to watch sports, play chess & dominos',
          completed: 0
        },

        { 
          project_name: 'Build Tree House', 
          description: 'Place for children to play & see whats below them',
          completed: 0 
        }
    ]);
};
