exports.seed = function (knex, Promise) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        { name: "Lambda" },
        { name: "computer" },
        { name: "internet" },
        { name: "Slack" },
        { name: "Lambda for cohort" },
        { name: "computer preferably laptop" },
        { name: "internet that dones't disconnect" },
        { name: "Slack to communicate" },
        { name: "other web devlopers" },
      ]);
    });
};
