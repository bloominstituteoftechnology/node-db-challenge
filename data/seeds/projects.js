exports.seed = knex =>
  knex("projects")
    .truncate()
    .then(() =>
      knex("projects").insert([
        {
          name: "Project One",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos necessitatibus unde laboriosam ad inventore labore optio dolore reiciendis quidem."
        },
        {
          name: "Project Two",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos necessitatibus unde laboriosam ad inventore labore optio dolore reiciendis quidem."
        }
      ])
    );
