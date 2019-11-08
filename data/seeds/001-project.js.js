
exports.seed = function (knex, Promise) {
  return knex('projects').insert([
    {
      project_name: 'Atlanta',
      project_description: '2800 Peach Tree Avenue, Atlanta, GA 865567',
      completed: 0
    },
    {
      project_name: 'August',
      project_description: '5400 James Brown BLVD, Augusta, GA 30903',
      completed: 0
    },
    {
      project_name: 'Superman',
      project_description: '3200  Singer Way, Everywhere, GA, 980456',
      completed: 0
    },
    {
      project_name: 'Batman',
      project_description: '8700 Great Singer Way, Everywhere, GA, 980456',
      completed: 0
    },
    {
      project_name: 'Jorman Nesse',
      project_description: '3200 Way Great Singer , Everywhere, GA, 980456',
      completed: 0
    },
    {
      project_name: 'Jesse Norman',
      project_description: '6500 Great Singer Way, Everywhere, GA, 980456',
      completed: 0
    },
    {
      project_name: 'Norman Jesse ',
      project_description: '6600 Great Singer Way, Everywhere, GA, 980456',
      completed: 0
    }
  ])
};
