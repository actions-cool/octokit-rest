---
title: 'gitignore'
---

## Get all gitignore templates

List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user).

```js
octokit.gitignore.getAllTemplates();
```

### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/gitignore/#get-all-gitignore-templates).

## Get a gitignore template

The API also allows fetching the source of a single template.
Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.

```js
octokit.gitignore.getTemplate({
  name,
});
```

### Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>name</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/gitignore/#get-a-gitignore-template).

