# vile-escomplex [![CircleCI](https://circleci.com/gh/forthright/vile-escomplex.svg?style=svg&circle-token=c784fb6e6036f610d45b765411d70406aa4329a6)](https://circleci.com/gh/forthright/vile-escomplex) [![Build status](https://ci.appveyor.com/api/projects/status/ot1cj30iy46rl0jt/branch/master?svg=true)](https://ci.appveyor.com/project/brentlintner/vile-escomplex/branch/master)

[![score-badge](https://vile.io/api/v0/users/brentlintner/vile-escomplex/badges/score?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/~brentlintner/vile-escomplex) [![security-badge](https://vile.io/api/v0/users/brentlintner/vile-escomplex/badges/security?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/~brentlintner/vile-escomplex) [![coverage-badge](https://vile.io/api/v0/users/brentlintner/vile-escomplex/badges/coverage?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/~brentlintner/vile-escomplex) [![dependency-badge](https://vile.io/api/v0/users/brentlintner/vile-escomplex/badges/dependency?token=uFywUmzZfbg6UboLzn6R)](https://vile.io/~brentlintner/vile-escomplex)

A [vile](https://vile.io) plugin for calculating JavaScript complexity stats. Uses [escomplex](https://github.com/escomplex/escomplex).

## Requirements

- [nodejs](http://nodejs.org)
- [npm](http://npmjs.org)

## Installation

    npm i vile --save-dev
    npm i vile-escomplex --save-dev

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

## Licensing

This project is licensed under the [MPL](https://www.mozilla.org/MPL/2.0) license.

Any contributions made to this project are made under the current license.

## Hacking

    cd vile-escomplex
    npm install
    npm test

To run compile task with file watch in the background:

    npm run dev

To run tests with coverage:

    npm run test-cov

See `npm run` for other available scripts.

## Versioning

This project ascribes to [semantic versioning](http://semver.org).

## Contributions

Current list of [Contributors]().

Any contributions are welcome and appreciated!

All you need to do is submit a [Pull Request]().

1. Please consider tests and code quality before submitting.
2. Please try to keep commits clean, atomic and well explained (for others).

### Issues

Current issue tracker is on [GitHub]().

Even if you are uncomfortable with code, an issue or question is welcome.

### Code Of Conduct

This project ascribes to CoralineAda's [Contributor Covenant](https://github.com/CoralineAda/contributor_covenant).

### Maintainers

- Brent Lintner - [@brentlintner](http://github.com/brentlintner)

## Architecture

The node library written in basic JavaScript.

The test code is written in [CoffeeScript](http://coffeescript.org).
