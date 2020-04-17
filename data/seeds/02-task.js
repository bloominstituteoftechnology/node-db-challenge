exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("task")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("task").insert([
        {
          project_id: 1,
          description: "Install WordPress",
          notes: "",
          completed: false,
        },
        {
          project_id: 1,
          description: "Identify possible API endpoints",
          notes: "",
          completed: false,
        },
        {
          project_id: 1,
          description: "Build the front-end app",
          notes: "",
          completed: false,
        },
        {
          project_id: 2,
          description: "Ask for customers requests",
          notes: "",
          completed: false,
        },
        {
          project_id: 2,
          description: "Collect product images, videos etc. from customers",
          notes: "",
          completed: false,
        },
        {
          project_id: 2,
          description: "Build the back-end API",
          notes: "",
          completed: false,
        },
        {
          project_id: 3,
          description: "Find recent trends in personal blog designs",
          notes: "",
          completed: false,
        },
        {
          project_id: 3,
          description: "Pick colors under UX designer's advice",
          notes: "",
          completed: false,
        },
        {
          project_id: 3,
          description: "Create HTML/CSS files",
          notes: "",
          completed: false,
        },
      ]);
    });
};
