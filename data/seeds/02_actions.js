exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: '1',
          action_description: 'Start the project',
          additional_information: 'Currently no addition info',
          completed: false
        },
        {
          project_id: '1',
          action_description: 'Track progrss',
          additional_information:
            'Give daily status updates to project manager',
          completed: false
        },
        {
          project_id: '2',
          action_description: 'Project kickoff',
          additional_information: '',
          completed: false
        },
        {
          project_id: '2',
          action_description: 'action description',
          additional_information: '',
          completed: false
        },
        {
          project_id: '3',
          action_description: 'Start project',
          additional_information: '',
          completed: false
        },
        {
          project_id: '3',
          action_description: 'action description',
          additional_information: '',
          completed: false
        }
      ]);
    });
};
