exports.seed = function(knex, Promise) {
  return knex('actions')
    .truncate()
    .then(function() {
      return knex('actions').insert([
        { description: 'description', notes: 'notes', project_id: '1' },
        { description: 'description', notes: 'notes', project_id: '1' },
        { description: 'description', notes: 'notes', project_id: '1' },
        { description: 'description', notes: 'notes', project_id: '1' },
        { description: 'description', notes: 'notes', project_id: '2' },
        { description: 'description', notes: 'notes', project_id: '2' },
        { description: 'description', notes: 'notes', project_id: '2' },
        { description: 'description', notes: 'notes', project_id: '2' }
      ])
    })
}
