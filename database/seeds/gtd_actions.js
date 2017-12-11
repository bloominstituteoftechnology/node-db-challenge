
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Actions').insert([
        {projectId: 1, description: "code", notes: "JavaScript, Knex, Sqlite3"},
        {projectId: 1, description: "setup", notes: "migrate and seed"},  
        {projectId: 1, description: "coffee", notes: "keep it coming"},        
        {projectId: 2, description: "sweep", notes: "bedroom, living room, kitchen"},
        {projectId: 2, description: "scrub", notes: "bathroom kitchen"},      
        {projectId: 3, description: "dress", notes: "shorts, socks, running shoes"},           
      ]);
    });
};
