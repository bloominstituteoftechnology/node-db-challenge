exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name: 'Read about AWS Lambda Functions', description:'netlify docs might be a good start', projectId: 1, },
        {name: 'boilerplate', description:'with create-react-app', projectId: 1, },
        {name: 'find a tutorial', description:'maybe net ninja?', projectId: 2, },
        {name: 'follow it', description:'Thanksgiving break seems perfect', projectId: 2, },
        {name: 'Check Tracks', description:'currently leaning to data or social media', projectId: 3, },
        {name: 'brainstorm options', description:'with team', projectId: 3, },
      ]);
    });
};
