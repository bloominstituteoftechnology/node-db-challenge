
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {projectName: 'Newsletter', projectDescription: 'Create company newsletter for the month of February', projectComplete: True},
        {projectName: 'Landing Page', projectDescription: 'Build a landing page for Member Services', projectComplete: True},
        {projectName: 'Explainer Video', projectDescription: 'Create a video explaining the new SharePoint features', projectComplete: True},
        {projectName: 'Product Launch', projectDescription: 'Launch the first series of PlanScan', projectComplete: False},
        {projectName: 'Scholarship Flyer', projectDescription: 'Design the Health Careers Scholarship flyer', projectComplete: True},
        {projectName: 'Slides for All Staff', projectDescription: 'Create PowerPoint slides for the February All Staff meeting', projectComplete: False},
        {projectName: 'Redesign Fact Sheet', projectDescription: 'Redesign 2018 Facts Sheet for Alex', projectComplete: False},
        {projectName: 'Social Media', projectDescription: 'Check Facebook Analytics for January', projectComplete: True},
        {projectName: 'Family Day at the Park', projectDescription: 'Create agenda for Family Day at the Park', projectComplete: True},
        {projectName: 'Member Services App', projectDescription: 'Build Member Signup App', projectComplete: False},
      ]);
    });
};
