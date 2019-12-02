exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: 'Smurfs', 
        description: 'Advanced state management'},

        {project_name: 'Starwars', 
        description: 'Api '},

        {project_name: 'Dark Mode',
         description: 'Using custom hooks',}
      ]);
    });
};