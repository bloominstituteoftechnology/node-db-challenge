
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Fill out questions in ReadMe', notes: 'Please do not forget', completed: 0, project_id: '1'},
        {description: 'Get gas', notes: '', completed: 0, project_id: '2'},
        {description: 'Drive carefully on those country roads, ya hear?', notes: '', completed: 0, project_id: '2'},
        {description: 'Groom Chip', notes: 'Hopefully he isnt too dirty.' , completed: 0, project_id: '3'},
        {description: 'Tack up.', notes: 'Say thanks to Saige for conditioning your saddle.', completed: 0, project_id: '3'},
        {description: 'Mount and off you go.', notes: 'Maybe get a stepstool. Are you feeling flexible today?', completed: 0, project_id: '3'}
      ]);
    });
};
