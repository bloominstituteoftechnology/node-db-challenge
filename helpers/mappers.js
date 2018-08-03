module.exports = {
    projectToBody, actionToBody
    }
    
    function projectToBody(project) {
        const result = {
          ...project  
          };
      
        if (project.action) {
          result.action = project.action.map(action => ({
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