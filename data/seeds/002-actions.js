
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Make Beats', notes: 'Hip-Hop Beats At 90 BPM', completed: false, Requires_At_Home: true, Requires_At_Work: false, Requires_At_Computer: true},
        {description: 'Code For Family', notes: 'Make Them Whatever Website They Would Like', completed: false, Requires_At_Home: true, Requires_At_Work: false, Requires_At_Computer: true},
        {description: 'Read Textbooks', notes: 'Biology', completed: false, Requires_At_Home: true, Requires_At_Work: false, Requires_At_Computer: false},
        {description: 'Read Textbooks', notes: 'Calculus', completed: false, Requires_At_Home: true, Requires_At_Work: false, Requires_At_Computer: false},
        {description: 'Read Textbooks', notes: 'Trigonometry', completed: false, Requires_At_Home: true, Requires_At_Work: false, Requires_At_Computer: false},
      ]);
    });
};
