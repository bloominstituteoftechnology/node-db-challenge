"use strict";

const db = require("../dbConfig.js");

module.exports = {
  async get(tableName) {
    return await db(tableName).select();
  },

  async getProject(id) {
    //   return await db(`actions`)
    //     .select(`projects.name as project_name`,
    //             `projects.description as projects_description`,
    //             `projects.flag as projects_flag`,
    //             `actions.name as actions_name`,
    //             `actions.description as actions_description`,
    //             `actions.notes as action_notes`,
    //             `actions.flag as actions_flag`)
    //     .innerJoin(`projects`, `projects.id`, `actions.id`)
    //     .where(`projects.id`, id)
    const project = await db(`projects`).where({
        id: id
    }).select('id', 'name', 'description', 'flag as completed')
    const actions = await db(`actions`)
      .where({
        project_id: id
      })
      .select();

    return {
        id: project[0].id,
        name: project[0].name,
        description: project[0].description,
        completed: project[0].completed,
        actions: actions
    }
  },

  async addProject(data) {
    return await db(`projects`).insert({
      name: data.name,
      description: data.description,
      falg: data.flag
    });
  },

  async addAction(data) {
    return await db(`actions`).insert({
      name: data.name,
      description: data.description,
      flag: data.flag,
      notes: data.notes,
      project_id: data.project_id
    });
  },

  async delete(tableName, id) {
    return await db(tableName)
      .where({
        id: id
      })
      .del();
  },

  async updateProject(data) {
    return await db(`projects`)
      .where({
        id: data.id
      })
      .update({
        name: data.name,
        description: data.description,
        falg: data.flag
      });
  },

  async updateAction(data) {
    return await db(`actions`)
      .where({
        id: data.id
      })
      .update({
        name: data.name,
        description: data.description,
        falg: data.flag,
        notes: data.notes
      });
  }
};
