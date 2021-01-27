---
title: 'interactions'
---

## Get interaction restrictions for an organization

Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.

```js
octokit.interactions.getRestrictionsForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization).

## Get interaction restrictions for a repository

Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.

```js
octokit.interactions.getRestrictionsForRepo({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository).

## Get interaction restrictions for your public repositories

Shows which type of GitHub user can interact with your public repositories and when the restriction expires. If there are no restrictions, you will see an empty response.

```js
octokit.interactions.getRestrictionsForYourPublicRepos();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories).

## Remove interaction restrictions for an organization

Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.

```js
octokit.interactions.removeRestrictionsForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization).

## Remove interaction restrictions for a repository

Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

```js
octokit.interactions.removeRestrictionsForRepo({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository).

## Remove interaction restrictions from your public repositories

Removes any interaction restrictions from your public repositories.

```js
octokit.interactions.removeRestrictionsForYourPublicRepos();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories).

## Set interaction restrictions for an organization

Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.

```js
octokit.interactions.setRestrictionsForOrg({
  org,
  limit,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>limit</td><td>yes</td><td>

The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.

</td></tr>
<tr><td>expiry</td><td>no</td><td>

The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization).

## Set interaction restrictions for a repository

Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

```js
octokit.interactions.setRestrictionsForRepo({
  owner,
  repo,
  limit,
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
<tr><td>limit</td><td>yes</td><td>

The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.

</td></tr>
<tr><td>expiry</td><td>no</td><td>

The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository).

## Set interaction restrictions for your public repositories

Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.

```js
octokit.interactions.setRestrictionsForYourPublicRepos({
  limit,
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
    <tr><td>limit</td><td>yes</td><td>

The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.

</td></tr>
<tr><td>expiry</td><td>no</td><td>

The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories).

