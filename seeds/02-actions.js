
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id:1, 
          description:'create yarn and knex files', 
          notes:'the inits', completed:false},
        {project_id:1, 
          description:'create migrations and seeds', 
          notes:'knex migrate/seed', completed:false},
        {project_id:2, 
          description:'Use the correct command in terminal to create a react app', 
          notes:'import react', completed:false},
        {project_id:2, 
          description:'Use React Router', 
          notes:'', completed:false},
        {project_id:3, 
          description:'When clicking on one of the links, only show the related cards.', 
          notes:'only use javascript', completed:false}
      ]);
    });
};
