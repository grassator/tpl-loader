var _ = require('lodash');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var template = _.template(source, null, this.options.tplSettings);
  return 'module.exports = ' + template;
};
