exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("project").insert([
        {
          name: "Transform WordPress into Headless CMS via REST API",
          description:
            "In this project, we will be creating a React front-end project, using WordPress's new REST API feature as a back-end data provider.",
          completed: false,
        },
        {
          name: "Create a back-end API for a furniture store",
          description: "This project is for a private client.",
          completed: false,
        },
        {
          name: "Design 3 different personal blog prototypes",
          description:
            "Prototypes will be presented to potential customers who are in the market for a new personal website.",
          completed: false,
        },
      ]);
    });
};
