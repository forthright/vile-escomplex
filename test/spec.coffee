path = require "path"
_ = require "lodash"
sinon_chai = require "./helpers/sinon_chai"
mimus = require "mimus"
sinon = require "sinon"
escomplex = require "escomplex"
chai = require "chai"
expect = chai.expect
lib = mimus.require "../lib/index", __dirname, [ "vile" ]

vile = mimus.get lib, "vile"

system_test_dir = path.resolve(
  path.join __dirname, "..", "test", "fixtures")

change_into_system_test_dir_on_each = ->
  cwd = undefined

  beforeEach ->
    cwd = process.cwd()
    process.chdir system_test_dir

  afterEach ->
    process.chdir cwd

describe "vile-escomplex", ->
  change_into_system_test_dir_on_each()

  afterEach -> mimus.reset()

  describe "punish", ->
    it "returns an empty array", ->
      config = ignore: [ "*" ]
      lib.punish(config).should.become []

    describe "allow", ->
      it "allows only some files", ->
        config = allow: [ "src" ]
        lib.punish(config).should.become [
          {
            type: vile.COMP,
            path: "src/complex-1.js",
            complexity: 7
          }
        ]

    describe "ignore", ->
      it "ignores some files", ->
        config = ignore: [ "complex-2.es6" ]

        lib.punish(config).should.become [
          {
            type: vile.COMP,
            path: "src/complex-1.js",
            complexity: 7
          }
        ]

    describe "using maintainability_index", ->
      it "can be set via config", ->
        config = config: use_maintainability_index: true

        lib.punish(config).should.become [
          {
            type: vile.COMP,
            path: "complex-2.es6",
            complexity: 128.31
          }
          {
            type: vile.COMP,
            path: "src/complex-1.js",
            complexity: 139.55
          }
        ]

    describe "passing library options to escomplex", ->
      beforeEach ->
        mimus.stub escomplex, "analyse"

      it "can be set via user config", (done) ->
        config =
          ignore: [ "src" ]
          config:
            options:
              foo: true
              bar: "dd"
              baz: 7

        lib.punish(config).should.be.fulfilled.notify ->
          setTimeout ->
            expect(escomplex.analyse.args[0][1]).to.eql {
                foo: true
                bar: "dd"
                baz: 7
              }
            done()
          , 5

        return
