exports.seed = (knex, Promise) => {
  return knex('actions').truncate()
    .then(() => {
      return knex('actions').insert([
        { description: 'an action\'s desc.', notes:'an action\'s notes', completed: false, project_id: 1 },
        { description: 'another action\'s desc.', notes:'another action\'s notes', completed: false, project_id: 1 },
        { description: 'yet another action\'s desc.', notes:'yet another action\'s notes', completed: true, project_id: 1 },
        { description: 'an action\'s desc.', notes:'an action\'s notes', completed: false, project_id: 2 },
        { description: 'another action\'s desc.', notes:'another action\'s notes', completed: true, project_id: 2 },
        { description: 'yet another action\'s desc.', notes:'yet another action\'s notes', completed: true, project_id: 2 },
        { description: 'an action\'s desc.', notes:'an action\'s notes', completed: true, project_id: 3 },
        { description: 'another action\'s desc.', notes:'another action\'s notes', completed: true, project_id: 3 },
        { description: 'yet another action\'s desc.', notes:'yet another action\'s notes', completed: true, project_id: 3 }
      ]);
    });
};
