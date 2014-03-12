/**
 * Handlebars Helpers: {{times}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

// Node.js
var path = require('path');
var fs = require('fs');

// node_modules
var Handlebars = require('handlebars');

// Export helpers
module.exports = function (config) {
  /**
   * {{times}}
   */
  return {
    times: function(value, options) {
      var data, i, content = "";

      for (i = 1; i <= value; i++) {
        if (options.data) {
          data = Handlebars.createFrame(options.data || {});
          data.index = i;
        }
        content = content + options.fn(this, { data: data });
      }
      return content;
    }
  };
};

