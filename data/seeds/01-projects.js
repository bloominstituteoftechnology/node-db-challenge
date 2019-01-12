
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: "Teaching Linear Equations", 
         project_des: "Algebra 2: Unit-2 and Lesson-3", 
        isCompleted: true},
        {project_name: "Completing Sprint Challenge",
         project_des: "Full stack web development back end assignment", 
         isCompleted: true},
      ]);
    });
};
