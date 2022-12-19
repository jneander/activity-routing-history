# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.0](https://github.com/jneander/activity-routing-history/compare/v1.0.1...v2.0.0) (2022-12-19)

### ⚠ BREAKING CHANGES

- `history` must now be installed by consumers of this library. The history instance creation
  functions are no longer re-exported by this library and must be imported directly from `history`.
- Source is no longer transpiled for engine compatibility. That responsibility belongs to the
  consumer.

### Miscellaneous Chores

- build using tsc
  ([e9325eb](https://github.com/jneander/activity-routing-history/commit/e9325eb25e9359d04ce0e5870e328650af6414b7))
- use history as peer dependency
  ([14db988](https://github.com/jneander/activity-routing-history/commit/14db988dab020e3b4bd4c475f07d99a998808f9c))
