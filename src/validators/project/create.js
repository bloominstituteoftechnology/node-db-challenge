const express = require('express');
const ValidationError = require('../validationError'); 

module.exports = {
	name: ({name}) => {
    	if (name === '' || typeof name != "string" || name.length > 128) {
      		throw new ValidationError('Invalid project name.');
     	}
      return true;
	},
	description: ({description}) => {
    	if (description === '' || typeof description != "string") {
    		throw new ValidationError('Project must include description text.');
    	}
    	return true;
	},
	completed: ({completed}) => {
    	if (typeof completed != "boolean") {
      	throw new ValidationError('Project completed invlaid.');
    	}
      return true;
	}
};