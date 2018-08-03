
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description:'action_01', notes:'1_action_Lorem ipsum dolor sit amet, mea eros virtute ', completed:0, project_id: 0, project_id: 1},
        {description:'action_02', notes:'2_action_No suas nihil inermis vim, nam reformidans comprehensam ne. ', completed:0, project_id: 1},
        {description:'action_03',notes: '3_action_Mei ut paulo pertinacia, cum percipit vulputate ne. Pro dicta ', completed:0, project_id: 2},
        {description:'action_04', notes:'4_action_Lorem ipsum dolor sit amet, mea eros ', completed:0, project_id: 2},
        {description:'action_05', notes:'5_action_No suas nihil inermis vim, nam reformidans ', completed:0, project_id: 2},
        {description:'action_06',notes: '6_action_Mei ut paulo pertinacia, cum percipit vulputate ne. Pro ', completed:0, project_id: 3},
        {description:'action_07', notes:'7_action_Lorem ipsum dolor sit amet, mea eros virtute interpretaris ', completed:0, project_id: 3},
        {description:'action_08', notes:'8_action_No suas nihil inermis vim, nam ', completed:0, project_id: 3},
        {description:'action_09',notes: '9_action_Mei ut paulo pertinacia, cum percipit vulputate ne.', completed:0, project_id: 3}
      ]);
    });
};
