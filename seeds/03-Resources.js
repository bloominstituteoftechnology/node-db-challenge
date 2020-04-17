
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'giant cup of coffee', description: 'Pike roast is the best.', task_id: '1', project_id: '1'},
        {name: 'money', description: '', task_id: '2', project_id: '2'},
        {name: 'adorable Vokswagen Tiguan', description: '', task_id: '3', project_id: '2'},
        {name: 'Brushes/hoofpick', description: '', task_id: '4', project_id: '3'},
        {name: 'Saddle and Bridle', description: '', task_id: '5', project_id: '3'},
        {name: 'Helmet and TallBoots', description: '', task_id: '6', project_id: '3'},

      ]);
    });
};
