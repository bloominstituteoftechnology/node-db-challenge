
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {desc: 'Evaluation SM', note:'', project_id:'1', isComplete:'false'},
        {desc: 'Create version 1 of AutoEval', note:'', project_id:'1', isComplete:'false'},
        {desc: 'Keep track of hours', note:'', project_id:'1', isComplete:'false'},
        {desc: 'Set up meeting with Mary', note:'', project_id:'1', isComplete:'false'},
        {desc: 'Reach out to Referrals', note:'', project_id:'2', isComplete:'false'},
        {desc: 'Check in with co-owner', note:'', project_id:'2', isComplete:'false'},
        {desc: 'See if there any new candidates', note:'', project_id:'3', isComplete:'false'},
        {desc: 'Answer emails', note:'', project_id:'3', isComplete:'false'},
        {desc: 'Pick up mail', note:'', project_id:'4', isComplete:'false'},
        {desc: 'Get feedback', note:'', project_id:'4', isComplete:'false'},
        {desc: 'Pay Rent', note:'', project_id:'4', isComplete:'false'},
        {desc: 'Get new router', note:'', project_id:'5', isComplete:'false'},
        {desc: 'Reset router at abb', note:'', project_id:'5', isComplete:'false'},
        {desc: 'What other islands work?', note:'', project_id:'6', isComplete:'false'},
      ]);
    });
};
