/**
 * Handlebars Helper: {{not}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';


// Node.js
var path = require('path');
var fs   = require('fs');

// node_modules
var _ = require('lodash');

// Export helpers
module.exports = function (config) {
  /**
   * {{not}}
   */
  return {
    not: function (value, test, options) {
      if (value !== test) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    }
  };
};



