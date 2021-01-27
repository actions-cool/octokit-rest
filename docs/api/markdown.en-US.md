---
title: 'markdown'
---

## Render a Markdown document

```js
octokit.markdown.render({
  text,
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
    <tr><td>text</td><td>yes</td><td>

The Markdown text to render in HTML.

</td></tr>
<tr><td>mode</td><td>no</td><td>

The rendering mode.

</td></tr>
<tr><td>context</td><td>no</td><td>

The repository context to use when creating references in `gfm` mode.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/markdown/#render-a-markdown-document).

## Render a Markdown document in raw mode

You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.

```js
octokit.markdown.renderRaw({
  data,
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
    <tr><td>data</td><td>yes</td><td>

raw markdown text

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/markdown/#render-a-markdown-document-in-raw-mode).

