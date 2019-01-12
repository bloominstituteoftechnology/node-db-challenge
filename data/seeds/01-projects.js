
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {projectName: 'Newsletter', projectDescription: 'Create company newsletter for the month of February', projectComplete: true},
        {projectName: 'Landing Page', projectDescription: 'Build a landing page for Member Services', projectComplete: true},
        {projectName: 'Explainer Video', projectDescription: 'Create a video explaining the new SharePoint features', projectComplete: true},
        {projectName: 'Product Launch', projectDescription: 'Launch the first series of PlanScan', projectComplete: false},
        {projectName: 'Scholarship Flyer', projectDescription: 'Design the Health Careers Scholarship flyer', projectComplete: true},
        {projectName: 'Slides for All Staff', projectDescription: 'Create PowerPoint slides for the February All Staff meeting', projectComplete: false},
        {projectName: 'Redesign Fact Sheet', projectDescription: 'Redesign 2018 Facts Sheet for Alex', projectComplete: false},
        {projectName: 'Social Media', projectDescription: 'Check Facebook Analytics for January', projectComplete: true},
        {projectName: 'Family Day at the Park', projectDescription: 'Create agenda for Family Day at the Park', projectComplete: true},
        {projectName: 'Member Services App', projectDescription: 'Build Member Signup App', projectComplete: false},
      ]);
    });
};
