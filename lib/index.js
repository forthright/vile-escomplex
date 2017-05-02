"use strict";

var _ = require("lodash");
var unixify = require("unixify");
var escomplex = require("escomplex");
var vile = require("vile");

var IS_JS = /(\.js|\.es6)$/;

var is_js_file = function is_js_file(file, is_dir) {
  return is_dir || IS_JS.test(file);
};

var allowed = function allowed(ignore, allow) {
  var filtered = vile.filter(ignore, allow);
  return function (file, is_dir) {
    return filtered(file) && is_js_file(file, is_dir);
  };
};

var complexity_value = function complexity_value(result, config) {
  return _.toNumber(_.toNumber(_.get(config, "use_maintainability_index") ? _.get(result, "maintainability") : _.get(result, "aggregate.cyclomatic")).toFixed(2));
};

var into_issues = function into_issues(config) {
  return function (filepath, filedata) {
    var options = _.get(config, "options");
    var result = escomplex.analyse(filedata, options);
    var comp = complexity_value(result, config);
    return vile.issue({
      type: vile.COMP,
      path: unixify(filepath),
      complexity: comp
    });
  };
};

var punish = function punish(user_config) {
  var config = _.get(user_config, "config", {});
  var ignore = _.get(user_config, "ignore");
  var allow = _.get(user_config, "allow");

  return vile.promise_each(process.cwd(), allowed(ignore, allow), into_issues(config));
};

module.exports = {
  punish: punish
};