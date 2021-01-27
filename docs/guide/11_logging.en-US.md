---
title: "Logging"
toc: 'menu'
---

`Octokit` has 4 built-in log methods

1. `octokit.log.debug(message[, additionalInfo])`
2. `octokit.log.info(message[, additionalInfo])`
3. `octokit.log.warn(message[, additionalInfo])`
4. `octokit.log.error(message[, additionalInfo])`

They can be configured using the `log` client option. By default, `octokit.log.debug()` and `octokit.log.info()` are no-ops, while the other two call `console.warn()` and `console.error()` respectively.

This is useful if you build reusable [plugins](#plugins).
