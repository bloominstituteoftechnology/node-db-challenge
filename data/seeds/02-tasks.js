exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          {name: 'Study Hard', description: 'Duh', project_id: 1},
          {name: 'Sleep Well', description: 'Sleep when you are dead', project_id: 1},
          {name: 'Always Be Coding', description: 'Love the GitHub', project_id: 1},
          {name: 'Eat your vegies', description: 'Duh', project_id: 2},
          {name: 'Take your vitamins', description: 'Mom is a nurse, not an option', project_id: 2},
          {name: 'Say your prayers', description: 'From Hulk Hogan', project_id: 2},
          {name: 'Run Away', description: 'Neverland is lovely this time of year', project_id: 3},
          {name: 'Interview Peter Pan', description: 'He did it!', project_id: '3'},
          {name: 'Lie About Age', description: 'They cannot prove you are an adult', project_id: 3}
        ]);
      });
  };