
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description: 'foundation', action_notes:'pour foundation', completed: 'true', project_id:'1' },
        {action_description: 'framing', action_notes:'construct rough framing', completed: 'true', project_id:'1' },
        {action_description: 'hole', action_notes:'dig a shallow, broad planting hole.', completed: 'true', project_id:'2' },
        {action_description: 'tree', action_notes:'place the tree at the proper height', completed: 'true', project_id:'2' },
        {action_description: 'interests', action_notes:'develop common interests', completed: 'true', project_id:'3' },
        {action_description: 'play', action_notes:'Dont be afraid of a little boisterous play', completed: 'true', project_id:'3' }
     
       
      ]);
    });
};
