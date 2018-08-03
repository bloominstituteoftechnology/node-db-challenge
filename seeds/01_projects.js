
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project_01', description:'1 _ Lorem ipsum dolor sit amet, mea eros virtute ', completed:0},
        {name: 'project_02', description:'2 _ No suas nihil inermis vim, nam reformidans comprehensam ne. ', completed:0},
        {name: 'project_03',description: '3 _ Mei ut paulo pertinacia, cum percipit vulputate ne. Pro dicta ', completed:0},
        {name: 'project_04', description:'4 _ Lorem ipsum dolor sit amet, mea eros ', completed:0},
        {name: 'project_05', description:'5 _ No suas nihil inermis vim, nam reformidans ', completed:0},
        {name: 'project_06',description: '6 _ Mei ut paulo pertinacia, cum percipit vulputate ne. Pro ', completed:0},
        {name: 'project_07', description:'7 _ Lorem ipsum dolor sit amet, mea eros virtute interpretaris ', completed:0},
        {name: 'project_08', description:'8 _ No suas nihil inermis vim, nam ', completed:0},
        {name: 'project_09',description: '9 _ Mei ut paulo pertinacia, cum percipit vulputate ne.', completed:0}
      ]);
    });
};
