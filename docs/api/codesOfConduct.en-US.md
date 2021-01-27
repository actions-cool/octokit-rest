---
title: 'codesOfConduct'
---

## Get all codes of conduct

```js
octokit.codesOfConduct.getAllCodesOfConduct();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/codes_of_conduct/#get-all-codes-of-conduct).

## Get a code of conduct

```js
octokit.codesOfConduct.getConductCode({
  key,
});
```

#### Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>key</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/codes_of_conduct/#get-a-code-of-conduct).

## Get the code of conduct for a repository

Returns the contents of the repository's code of conduct file, if one is detected.

A code of conduct is detected if there is a file named `CODE_OF_CONDUCT` in the root directory of the repository. GitHub detects which code of conduct it is using fuzzy matching.

```js
octokit.codesOfConduct.getForRepo({
  owner,
  repo,
});
```

#### Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/codes_of_conduct/#get-the-code-of-conduct-for-a-repository).

