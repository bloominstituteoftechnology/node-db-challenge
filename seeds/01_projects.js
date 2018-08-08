
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'chat application', description : 'project for building chat application'},
        {project_name: 'email application', description : 'project for building email appllication'},
        {project_name: 'e-commerce' , description :'project for building e commerce application' }
      ]);
    });
};
