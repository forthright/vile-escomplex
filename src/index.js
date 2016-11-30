const path = require("path")
const _ = require("lodash")
const escomplex = require("escomplex")
const vile = require("@forthright/vile")

const IS_JS = /(\.js|\.es6)$/

const is_js_file = (file, is_dir) =>
  is_dir || IS_JS.test(file)

const allowed = (ignore, allow) => {
  let filtered = vile.filter(ignore, allow)
  return (file, is_dir) =>
    filtered(file) && is_js_file(file, is_dir)
}

const complexity_value = (result, config) =>
  _.toNumber(
    _.toNumber(
      _.get(config, "use_maintainability_index") ?
        _.get(result, "maintainability") :
        _.get(result, "cyclomatic")
    ).toFixed(2))

const into_issues = (config) =>
  (filepath, filedata) => {
    let options = _.get(config, "options")
    const result = escomplex.analyse(filedata, options)
    let comp = complexity_value(result, config)
    return vile.issue({
      type: vile.COMP,
      path: filepath,
      complexity: comp
    })
  }

const punish = (user_config) => {
  var config = _.get(user_config, "config", {})
  var ignore = _.get(user_config, "ignore")
  var allow = _.get(user_config, "allow")

  return vile.promise_each(
    process.cwd(),
    allowed(ignore, allow),
    into_issues(config))
}

module.exports = {
  punish: punish
}
