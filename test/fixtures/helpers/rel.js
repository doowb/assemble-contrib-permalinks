/**
 * Handlebars Helpers: {{rel}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

// Node.js
var path   = require('path');
var fs     = require('fs');


// Export helpers
module.exports = function (config) {
  /**
   * {{rel}}
   */
  return {
    rel: function(context) {
      var newDest      = this.dest;
      var destDirname  = path.dirname(context);
      var relativePath = path.relative(path.resolve(destDirname), path.resolve(newDest));

      return relativePath.replace(/\\/g, '/');
    }
  };
};
