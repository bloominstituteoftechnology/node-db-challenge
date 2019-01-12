
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Project Awesome', description: "hey hey hey! This is a project"},
        {name: 'Greatest Project Ever', description: "Oh yeah! This is good!"},
        {name: 'look at this project', description: "Project is the best ever"},
        {name: 'Great effort', description: "Go project"},
        
      ]);
    });
};
