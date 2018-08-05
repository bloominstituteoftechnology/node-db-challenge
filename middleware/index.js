// middleware for project constraints
function projectConstraints(req, res, next) {
  const NAME = req.body.name;
  const DESCRIPTION = req.body.description;

  if (!NAME) {
    return next({
      code: 400,
      error: `Please provide a 'name' for the project.`,
    });
  }

  if (!DESCRIPTION) {
    return next({
      code: 400,
      error: `Please provide a 'description' for the project.`,
    });
  }

  if (NAME.length > 255) {
    return next({
      code: 400,
      error: `The 'name' of the project must be fewer than 255 characters.`,
    });
  }

  if (NAME.length < 2) {
    return next({
      code: 400,
      error: `The 'name' of the project must be more than 1 character.`,
    });
  }

  if (DESCRIPTION.length > 255) {
    return next({
      code: 400,
      error: `The 'description' of the project must be fewer than 255 characters.`,
    });
  }

  if (DESCRIPTION.length < 2) {
    return next({
      code: 400,
      error: `The 'description' of the project must be more than 1 character.`,
    });
  }

  // set the req object
  req.NAME = NAME;
  req.DESCRIPTION = DESCRIPTION;

  next();
}

// middleware for action constraints
function actionConstraints(req, res, next) {
  const NOTES = req.body.notes;
  const DESCRIPTION = req.body.description;

  if (!NOTES) {
    return next({
      code: 400,
      error: `Please provide a 'notes' for the action.`,
    });
  }

  if (!DESCRIPTION) {
    return next({
      code: 400,
      error: `Please provide a 'description' for the action.`,
    });
  }

  if (NOTES.length > 255) {
    return next({
      code: 400,
      error: `The 'notes' for the action must be fewer than 255 characters.`,
    });
  }

  if (NOTES.length < 2) {
    return next({
      code: 400,
      error: `The 'notes' for the action must be more than 1 character.`,
    });
  }

  if (DESCRIPTION.length > 255) {
    return next({
      code: 400,
      error: `The 'description' of the action must be fewer than 255 characters.`,
    });
  }

  if (DESCRIPTION.length < 2) {
    return next({
      code: 400,
      error: `The 'description' of the action must be more than 1 character.`,
    });
  }

  // set the req object
  req.NOTES = NOTES;
  req.DESCRIPTION = DESCRIPTION;

  next();
}

module.exports.projectConstraints = projectConstraints;
module.exports.actionConstraints = actionConstraints;
