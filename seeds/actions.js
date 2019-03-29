exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: 'desc 1',
          notes: 'not really',
          complete: false,
          project_id: 2
        },
        {
          description: 'desc 99',
          notes: 'not really',
          complete: false,
          project_id: 1
        },
        {
          description: 'desc 123',
          notes: 'not really',
          complete: false,
          project_id: 3
        },
        {
          description: 'desc 213123',
          notes: 'not really',
          complete: false,
          project_id: 1
        },
        {
          description: 'desc 123123',
          notes: 'not really',
          complete: false,
          project_id: 1
        },
        {
          description: 'desc 1231231231',
          notes: 'not really',
          complete: false,
          project_id: 2
        },
        {
          description: 'desc 144',
          notes: 'not really',
          complete: false,
          project_id: 3
        }
      ]);
    });
};
