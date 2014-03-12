/**
 * Handlebars Helpers: {{pagination}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

// Node.js
var path = require('path');
var fs = require('fs');

// node_modules
var Handlebars = require('handlebars');
var _ = require('lodash');

// Export helpers
module.exports = function (config) {
  /**
   * {{pagination}}
   * Adds a pagination to enable navigating to prev and next page/post.
   * @param  {Object} context Context to pass to the helper, most likely `pagination`.
   * @param  {Object} options Pass a modifier class to the helper.
   * @return {String}         The pagination, HTML.
   */
  return {
    pagination: function(context, options) {
      options = options || {};
      options.hash = options.hash || {};
      context = _.extend({modifier: ''}, context, config.context(), this, options.hash);

      var template = [
        '<ul class="pagination{{#if modifier}} {{modifier}}{{/if}}">',
        '',
        '  {{#is pagination.currentPage 1}}',
        '    <li class="prev disabled">',
        '      <a unselectable="on" class="unselectable">&laquo;</a>',
        '    </li>',
        '    <li class="prev disabled">',
        '      <a unselectable="on" class="unselectable">&lsaquo;</a>',
        '    </li>',
        '  {{/is}}',
        '',
        '  {{#not pagination.currentPage 1}}',
        '    <li class="prev">',
        '      <a href="{{relative page.dest first.dest}}">&laquo;</a>',
        '    </li>',
        '    <li class="prev">',
        '      <a href="{{relative page.dest prev.dest}}">&lsaquo;</a>',
        '    </li>',
        '  {{/not}}',
        '',
        '  {{#eachItems pages}}',
        '    <li{{#is ../page.dest this.dest}} class="active"{{/is}}>',
        '      <a href="{{relative ../page.dest this.dest}}">{{@number}}</a>',
        '    </li>',
        '  {{/eachItems}}',
        '',
        '  {{#not pagination.currentPage pagination.totalPages}}',
        '    <li class="next">',
        '      <a href="{{relative page.dest next.dest}}">&rsaquo;</a>',
        '    </li>',
        '    <li class="next">',
        '      <a href="{{relative page.dest last.dest}}">&raquo;</a>',
        '    </li>',
        '  {{/not}}',
        '',
        '  {{#is pagination.currentPage pagination.totalPages}}',
        '    <li class="next disabled">',
        '      <a unselectable="on" class="unselectable">&rsaquo;</a>',
        '    </li>',
        '    <li class="next disabled">',
        '      <a unselectable="on" class="unselectable">&raquo;</a>',
        '    </li>',
        '  {{/is}}',
        '',
        '</ul>'
      ].join('\n');

      return new Handlebars.SafeString(Handlebars.compile(template)(context));
    }
  };
};
