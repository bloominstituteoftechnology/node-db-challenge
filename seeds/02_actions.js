
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { name: 'database design', description : 'Database schema design and RDBMS structure', isCompleted : true , project_id : 1 },
        { name: 'UX/UI design', description : 'design of the user interface and user expreience', isCompleted : false , project_id : 1},
        { name: 'frontEnd Design', description : 'frontEnd design using React', isCompleted : false , project_id : 1 },
        { name: 'BackEnd Design', description : 'backend design using node, Exxpress, SQL', isCompleted : false , project_id : 1},

        { name: 'database design', description : 'Database schema design and RDBMS structure', isCompleted : true , project_id : 2},
        { name: 'UX/UI design', description : 'design of the user interface and user expreience', isCompleted : false , project_id : 2},
        { name: 'frontEnd Design', description : 'frontEnd design using React', isCompleted : true , project_id : 2 },
        { name: 'BackEnd Design', description : 'backend design using node, Exxpress, SQL', isCompleted : false , project_id : 2},

        { name: 'database design', description : 'Database schema design and RDBMS structure', isCompleted : true , project_id : 3},
        { name: 'UX/UI design', description : 'design of the user interface and user expreience', isCompleted : false , project_id : 3},
        { name: 'frontEnd Design', description : 'frontEnd design using React', isCompleted : false , project_id : 3},
        { name: 'BackEnd Design', description : 'backend design using node, Exxpress, SQL', isCompleted : true , project_id : 3},

      ]);
    });
};

