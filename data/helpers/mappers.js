module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody,
    actionToBody,
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function booleanToint(bool) {
    return bool === true ? 1 : 0;
  }
  
  function projectToBody(project) {
    const result = {
      ...project,
      project_completed: intToBoolean(project.completed),
    };
  
    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action,
        action_completed: intToBoolean(action.completed),
      }));
    }
  
    return result;
  }
  
  function actionToBody(action) {
    return {
      ...action,
      action_completed: intToBoolean(action.completed),
    };
  } 