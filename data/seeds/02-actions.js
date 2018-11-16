exports.seed = (knex, Promise) => {
  return knex('actions')
    .truncate()
    .then(() => {
      return knex('actions').insert([
        { description: 'action description', notes: 'the action notes', project_id: 1 },
        { description: 'another action description', notes: 'the action notes', project_id: 1 }
      ]);
    });
};
