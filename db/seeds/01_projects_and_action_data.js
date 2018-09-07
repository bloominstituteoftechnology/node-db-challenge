exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("projects")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("projects").insert([
          { id: 1, name: "RDBMS", description: "Learn RDBMS", flag: 0 },
          { id: 2, name: "React", description: "Lear react", flag: 0 },
          { id: 3, name: "HTML & CSS", description: "Lear HTML & CSS", flag: 0 }
        ]);
      }),
      knex("actions")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("actions").insert([
          { id: 1, project_id: 1, name: "Learn sqlite", description: "sqlite is lite weight database",notes: "check lambda TK", flag: 0 },
          { id: 2, project_id: 2, name: "Learn REDUX", description: "Redux is a state management library for react ",notes: "redux docs is the best place to start", flag: 0 },
          { id: 3, project_id: 3, name: "Learn LESS", description: "LESS converts js to css",notes: "refer less codumentation", flag: 0 }
        ]);
      })
  ]);
};
