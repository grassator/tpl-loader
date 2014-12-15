var _ = require('underscore');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var template = _.template(source);
  return 'module.exports = ' + template;
};
