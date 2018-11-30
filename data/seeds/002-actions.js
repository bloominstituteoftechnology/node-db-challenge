
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Make Beats', notes: 'Hip-Hop Beats At 90 BPM', completed: false},
        {description: 'Code For Family', notes: 'Make Them Whatever Website They Would Like', completed: false},
        {description: 'Read Textbooks', notes: 'Biology', completed: false},
        {description: 'Read Textbooks', notes: 'Calculus', completed: false},
        {description: 'Read Textbooks', notes: 'Trigonometry', completed: false},
      ]);
    });
};
