module.exports = {
projectToBody, actionToBody
}

function projectToBody(project) {
    const result = {
      ...project  
      };
  
    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action
          }));
    }
  
    return result;
  }
  
  function actionToBody(action) {
    return {
      ...action
        };
  }