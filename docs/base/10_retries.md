---
title: "Automatic retries"
toc: 'menu'
---

Many common request errors can be easily remediated by retrying the request. We recommend installing the [`@octokit/plugin-retry` plugin](https://github.com/octokit/plugin-retry.js) for Automatic retries in these cases

```js
const { Octokit } = require("@octokit/rest");
const { retry } = require("@octokit/plugin-retry");
const MyOctokit = Octokit.plugin(retry);

const octokit = new MyOctokit();

// all requests sent with the `octokit` instance are now retried up to 3 times for recoverable errors.
```
