---
title: 'secretScanning'
---

## Get a secret scanning alert

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

```js
octokit.secretScanning.getAlert({
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

The security alert number, found at the end of the security alert's URL.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/secret-scanning#get-a-secret-scanning-alert).

## List secret scanning alerts for a repository

Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

```js
octokit.secretScanning.listAlertsForRepo({
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

Set to `open` or `resolved` to only list secret scanning alerts in a specific state.

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository).

## Update a secret scanning alert

Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

```js
octokit.secretScanning.updateAlert({
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

Sets the state of the secret scanning alert. Can be either `open` or `resolved`. You must provide `resolution` when you set the state to `resolved`.

</td></tr>
<tr><td>resolution</td><td>no</td><td>

**Required when the `state` is `resolved`.** The reason for resolving the alert. Can be one of `false_positive`, `wont_fix`, `revoked`, or `used_in_tests`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/secret-scanning#update-a-secret-scanning-alert).

