exports.seed = function(knex) {
    
    return knex('tasks').truncate()
      .then(function () {
    
        return knex('tasks').insert([
          {description: 'Take Breaks!!!', notes: 'Important step', completed: 0, project_id: '1'},
          {description: 'Drink Mountain Dew', notes: 'Code fuel', completed: 0, project_id: '2'},
          {description: 'Listen to chill music', notes: '', completed: 0, project_id: '2'},
          {description: 'Save frequently', notes: '' , completed: 0, project_id: '3'},
          {description: 'Commit often', notes: '', completed: 0, project_id: '3'},
          {description: 'Finally Push', notes: '', completed: 0, project_id: '3'},
        ]);
      });
  };