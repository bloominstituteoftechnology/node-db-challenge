
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { id: 1, project_name: 'Bus Ticket Reservation', project_desc: 'Web-Based Bus Ticket Reservation System', completed: 0 },
        { id: 2, project_name: 'Online Blood Donation', project_desc: 'Web-Based Online Blood Donation System', completed: 0 },
        { id: 3, project_name: 'CRM', project_desc: 'Customer Relationship Management Based', completed: 0 }
      ]);
    });
};
