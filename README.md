# vile-escomplex [![CircleCI](https://circleci.com/gh/forthright/vile-escomplex.svg?style=shield&circle-token=c784fb6e6036f610d45b765411d70406aa4329a6)](https://circleci.com/gh/forthright/vile-escomplex) [![Build status](https://ci.appveyor.com/api/projects/status/ot1cj30iy46rl0jt/branch/master?svg=true)](https://ci.appveyor.com/project/brentlintner/vile-escomplex/branch/master) [![score-badge](https://vile.io/api/v0/projects/vile-escomplex/badges/score?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-escomplex) [![security-badge](https://vile.io/api/v0/projects/vile-escomplex/badges/security?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-escomplex) [![coverage-badge](https://vile.io/api/v0/projects/vile-escomplex/badges/coverage?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-escomplex) [![dependency-badge](https://vile.io/api/v0/projects/vile-escomplex/badges/dependency?token=USryyHar5xQs7cBjNUdZ)](https://vile.io/~brentlintner/vile-escomplex)

A [vile](https://vile.io) plugin for calculating JavaScript complexity stats. Uses [escomplex](https://github.com/escomplex/escomplex).

## Requirements

- [nodejs](http://nodejs.org)
- [npm](http://npmjs.org)

## Installation

    npm i -D vile vile-escomplex

## Config

By default, `cyclomatic` complexity is used, but you can
use the `maintainability` index instead:

```yaml
escomplex:
  config:
    use_maintainability_index: true
```

### Options For escomplex

```yaml
escomplex:
  config:
    options:
      logicalor: false
      noCoreSize: true
```

## Ignoring Files

`vile.ignore` is used as a base, but you can add onto it:

```yaml
escomplex:
  ignore:
    - some/path/*
    - file
    - dir
```

## Allowing Files

`vile.allow` is used as a base, but you alternatively specify:

```yaml
escomplex:
  allow:
    - dir
```

## Vile Types Generated

Until per method support is available, `vile.COMP` issues are
generated for each file only.

## Versioning

This project ascribes to [semantic versioning](http://semver.org).

## Licensing

This project is licensed under the [MPL-2.0](LICENSE) license.

Any contributions made to this project are made under the current license.

## Contributions

Current list of [Contributors](https://github.com/forthright/vile-escomplex/graphs/contributors).

Any contributions are welcome and appreciated!

All you need to do is submit a [Pull Request](https://github.com/forthright/vile-escomplex/pulls).

1. Please consider tests and code quality before submitting.
2. Please try to keep commits clean, atomic and well explained (for others).

### Issues

Current issue tracker is on [GitHub](https://github.com/forthright/vile-escomplex/issues).

Even if you are uncomfortable with code, an issue or question is welcome.

### Code Of Conduct

This project ascribes to [contributor-covenant.org](http://contributor-covenant.org).

By participating in this project you agree to our [Code of Conduct](CODE_OF_CONDUCT.md).

### Maintainers

- Brent Lintner - [@brentlintner](http://github.com/brentlintner)

## Hacking

    cd vile-escomplex
    npm install
    npm test

To run compile task with file watch in the background:

    npm run dev

To run tests with coverage:

    npm run test-cov

See `npm run` for other available scripts.

## Architecture

The node library written in basic JavaScript.

The test code is written in [CoffeeScript](http://coffeescript.org).
