exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Relational Databases - Sprint Challenge",
          description:
            "Complete Sprint challenge to apply learnings from this week",
          complete: false
        },
        {
          name: "Finish Vique Website",
          description: "Finalize design and copywriting. Build website",
          complete: false
        },
        {
          name: "Set up BajaBeer Website",
          description:
            "Initial structure of website that has information of beers make in Baja, California",
          complete: false
        }
      ]);
    });
};
