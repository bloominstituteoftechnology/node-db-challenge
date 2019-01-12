
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id:1, actions_des: 'Write a lesson plan',
         action_notes: 'Choose either on-course systems or google notes to write lesson plan',
         isCompleted: true},
         {project_id:1, actions_des: 'Collect required teaching materials',
         action_notes: 'Be ready with teaching-learning material, have activity sheets ready',
         isCompleted: true},
         {project_id:1, actions_des: 'execution',
         action_notes: 'Choose either student-oriented or teacher-oriented method',
         isCompleted: true},
         {project_id:1, actions_des: 'Grading papers',
         action_notes: 'Use online tools like zipgrade, scantran',
         isCompleted: true},
         {project_id:1, actions_des: 'Update gradebook',
         action_notes: 'enter the grades in powerschool',
         isCompleted: true},
      ]);
    });
};
