---
title: 'meta'
---

## Get GitHub meta information

Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/)."

**Note:** The IP addresses shown in the documentation's response are only example values. You must always query the API directly to get the latest list of IP addresses.

```js
octokit.meta.get();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/meta/#get-github-meta-information).

## Get Octocat

Get the octocat as ASCII art

```js
octokit.meta.getOctocat();
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
    <tr><td>s</td><td>no</td><td>

The words to show in Octocat's speech bubble

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation]().

## Get the Zen of GitHub

Get a random sentence from the Zen of GitHub

```js
octokit.meta.getZen();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation]().

## GitHub API Root

Get Hypermedia links to resources accessible in GitHub's REST API

```js
octokit.meta.root();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation]().

