
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Pass School Secretary II Probation',
        project_description: 'Follow MVUSD Procedure and Protocol',
        project_completed: false
      },
      { project_name: 'Pass Lambda Program',
      project_description: 'Attend Meetings, Complete Homework, Get Help, Pass Tests',
      project_completed: false
    },
    { project_name: 'Love My Kids',
    project_description: 'Work hard and dont quit to make a better life for my kids',
    project_completed: true
  }
      ]);
    });
};
