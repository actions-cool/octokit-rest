---
title: 'codeScanning'
---

## Get a code scanning alert

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

The security `alert_number` is found at the end of the security alert's URL. For example, the security alert ID for `https://github.com/Octo-org/octo-repo/security/code-scanning/88` is `88`.

```js
octokit.codeScanning.getAlert({
  owner,
  repo,
  alert_number,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>alert_number</td><td>yes</td><td>

</td></tr>
<tr><td>alert_id</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/code-scanning/#get-a-code-scanning-alert).

## List code scanning alerts for a repository

Lists all open code scanning alerts for the default branch (usually `main` or `master`). You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

```js
octokit.codeScanning.listAlertsForRepo({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>state</td><td>no</td><td>

Set to `open`, `fixed`, or `dismissed` to list code scanning alerts in a specific state.

</td></tr>
<tr><td>ref</td><td>no</td><td>

Set a full Git reference to list alerts for a specific branch. The `ref` must be formatted as `refs/heads/<branch name>`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/code-scanning/#list-code-scanning-alerts-for-a-repository).

## List recent code scanning analyses for a repository

List the details of recent code scanning analyses for a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

```js
octokit.codeScanning.listRecentAnalyses({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>ref</td><td>no</td><td>

Set a full Git reference to list alerts for a specific branch. The `ref` must be formatted as `refs/heads/<branch name>`.

</td></tr>
<tr><td>tool_name</td><td>no</td><td>

Set a single code scanning tool name to filter alerts by tool.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/code-scanning/#list-recent-analyses).

## Update a code scanning alert

Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

```js
octokit.codeScanning.updateAlert({
  owner,
  repo,
  alert_number,
  state,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>alert_number</td><td>yes</td><td>

The security alert number, found at the end of the security alert's URL.

</td></tr>
<tr><td>state</td><td>yes</td><td>

Sets the state of the code scanning alert. Can be one of `open` or `dismissed`. You must provide `dismissed_reason` when you set the state to `dismissed`.

</td></tr>
<tr><td>dismissed_reason</td><td>no</td><td>

**Required when the state is dismissed.** The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/code-scanning/#upload-a-code-scanning-alert).

## Upload a SARIF file

Upload a SARIF file containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

```js
octokit.codeScanning.uploadSarif({
  owner,
  repo,
  commit_sha,
  ref,
  sarif,
  tool_name,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>commit_sha</td><td>yes</td><td>

The commit SHA of the code scanning analysis file.

</td></tr>
<tr><td>ref</td><td>yes</td><td>

The full Git reference of the code scanning analysis file, formatted as `refs/heads/<branch name>`.

</td></tr>
<tr><td>sarif</td><td>yes</td><td>

A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string.

</td></tr>
<tr><td>checkout_uri</td><td>no</td><td>

The base directory used in the analysis, as it appears in the SARIF file.
This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.

</td></tr>
<tr><td>started_at</td><td>no</td><td>

The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>tool_name</td><td>yes</td><td>

The name of the tool used to generate the code scanning analysis alert.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/code-scanning/#upload-a-sarif-analysis).

