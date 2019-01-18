const express = require('express');
const ValidationError = require('../validationError'); 

module.exports = {
	description: ({description}) => {
    	if (description === '' || typeof description != "string" || description.length > 128 ) {
    		throw new ValidationError('Action text must contain a valid description.');
    	}
    	return true;
	},
	notes: ({notes}) => {
    	if (notes === '' || typeof notes != "string") {
    		throw new ValidationError('Action text must contain a valid description.');
    	}
    	return true;
	},
	completed: ({completed}) => {
    if (typeof completed != "boolean") {
      throw new ValidationError('Project completed invalid.');
    }
    return true;
  },
  project_id: ({project_id}) => {
    if (typeof project_id != "number") {
      throw new ValidationError('Project ID must be invlaid.');
    }
    return true;
  }

};