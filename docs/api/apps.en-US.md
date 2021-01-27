---
title: 'apps'
---

## Add a repository to an app installation

Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

```js
octokit.apps.addRepoToInstallation({
  installation_id,
  repository_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#add-a-repository-to-an-app-installation).

## Check a token

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

```js
octokit.apps.checkToken({
  client_id,
  access_token,
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
    <tr><td>client_id</td><td>yes</td><td>

The client ID of your GitHub app.

</td></tr>
<tr><td>access_token</td><td>yes</td><td>

The access_token of the OAuth application.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#check-a-token).

## Create a content attachment

Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://docs.github.com/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://docs.github.com/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

```js
octokit.apps.createContentAttachment({
  content_reference_id,
  title,
  body,
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
    <tr><td>content_reference_id</td><td>yes</td><td>

</td></tr>
<tr><td>title</td><td>yes</td><td>

The title of the attachment

</td></tr>
<tr><td>body</td><td>yes</td><td>

The body of the attachment

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#create-a-content-attachment).

## Create a GitHub App from a manifest

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

```js
octokit.apps.createFromManifest({
  code,
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
    <tr><td>code</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#create-a-github-app-from-a-manifest).

## Create an installation access token for an app

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.createInstallationAccessToken({
  installation_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
<tr><td>repositories</td><td>no</td><td>

List of repository names that the token should have access to

</td></tr>
<tr><td>repository_ids</td><td>no</td><td>

List of repository IDs that the token should have access to

</td></tr>
<tr><td>permissions</td><td>no</td><td>

The permissions granted to the user-to-server access token.

</td></tr>
<tr><td>permissions.actions</td><td>no</td><td>

The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.administration</td><td>no</td><td>

The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.checks</td><td>no</td><td>

The level of permission to grant the access token for checks on code. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.content_references</td><td>no</td><td>

The level of permission to grant the access token for notification of content references and creation content attachments. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.contents</td><td>no</td><td>

The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.deployments</td><td>no</td><td>

The level of permission to grant the access token for deployments and deployment statuses. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.environments</td><td>no</td><td>

The level of permission to grant the access token for managing repository environments. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.issues</td><td>no</td><td>

The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.metadata</td><td>no</td><td>

The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.packages</td><td>no</td><td>

The level of permission to grant the access token for packages published to GitHub Packages. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.pages</td><td>no</td><td>

The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.pull_requests</td><td>no</td><td>

The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.repository_hooks</td><td>no</td><td>

The level of permission to grant the access token to manage the post-receive hooks for a repository. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.repository_projects</td><td>no</td><td>

The level of permission to grant the access token to manage repository projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.

</td></tr>
<tr><td>permissions.secret_scanning_alerts</td><td>no</td><td>

The level of permission to grant the access token to view and manage secret scanning alerts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.secrets</td><td>no</td><td>

The level of permission to grant the access token to manage repository secrets. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.security_events</td><td>no</td><td>

The level of permission to grant the access token to view and manage security events like code scanning alerts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.single_file</td><td>no</td><td>

The level of permission to grant the access token to manage just a single file. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.statuses</td><td>no</td><td>

The level of permission to grant the access token for commit statuses. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.vulnerability_alerts</td><td>no</td><td>

The level of permission to grant the access token to retrieve Dependabot alerts. Can be one of: `read`.

</td></tr>
<tr><td>permissions.workflows</td><td>no</td><td>

The level of permission to grant the access token to update GitHub Actions workflow files. Can be one of: `write`.

</td></tr>
<tr><td>permissions.members</td><td>no</td><td>

The level of permission to grant the access token for organization teams and members. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_administration</td><td>no</td><td>

The level of permission to grant the access token to manage access to an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_hooks</td><td>no</td><td>

The level of permission to grant the access token to manage the post-receive hooks for an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_plan</td><td>no</td><td>

The level of permission to grant the access token for viewing an organization's plan. Can be one of: `read`.

</td></tr>
<tr><td>permissions.organization_projects</td><td>no</td><td>

The level of permission to grant the access token to manage organization projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.

</td></tr>
<tr><td>permissions.organization_secrets</td><td>no</td><td>

The level of permission to grant the access token to manage organization secrets. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_self_hosted_runners</td><td>no</td><td>

The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_user_blocking</td><td>no</td><td>

The level of permission to grant the access token to view and manage users blocked by the organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.team_discussions</td><td>no</td><td>

The level of permission to grant the access token to manage team discussions and related comments. Can be one of: `read` or `write`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#create-an-installation-access-token-for-an-app).

## Delete an app authorization

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

```js
octokit.apps.deleteAuthorization({
  client_id,
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
    <tr><td>client_id</td><td>yes</td><td>

The client ID of your GitHub app.

</td></tr>
<tr><td>access_token</td><td>no</td><td>

The OAuth access token used to authenticate to the GitHub API.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#delete-an-app-authorization).

## Delete an installation for the authenticated app

Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/v3/apps/#suspend-an-app-installation)" endpoint.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.deleteInstallation({
  installation_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#delete-an-installation-for-the-authenticated-app).

## Delete an app token

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

```js
octokit.apps.deleteToken({
  client_id,
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
    <tr><td>client_id</td><td>yes</td><td>

The client ID of your GitHub app.

</td></tr>
<tr><td>access_token</td><td>no</td><td>

The OAuth access token used to authenticate to the GitHub API.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#delete-an-app-token).

## Get the authenticated app

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getAuthenticated();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#get-the-authenticated-app).

## Get an app

**Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

```js
octokit.apps.getBySlug({
  app_slug,
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
    <tr><td>app_slug</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#get-an-app).

## Get an installation for the authenticated app

Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getInstallation({
  installation_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#get-an-installation-for-the-authenticated-app).

## Get an organization installation for the authenticated app

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getOrgInstallation({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#get-an-organization-installation-for-the-authenticated-app).

## Get a repository installation for the authenticated app

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getRepoInstallation({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#get-a-repository-installation-for-the-authenticated-app).

## Get a subscription plan for an account

Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

```js
octokit.apps.getSubscriptionPlanForAccount({
  account_id,
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
    <tr><td>account_id</td><td>yes</td><td>

account_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account).

## Get a subscription plan for an account (stubbed)

Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

```js
octokit.apps.getSubscriptionPlanForAccountStubbed({
  account_id,
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
    <tr><td>account_id</td><td>yes</td><td>

account_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account-stubbed).

## Get a user installation for the authenticated app

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getUserInstallation({
  username,
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
    <tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#get-a-user-installation-for-the-authenticated-app).

## Get a webhook configuration for an app

Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getWebhookConfigForApp();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps#get-a-webhook-configuration-for-an-app).

## List accounts for a plan

Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

```js
octokit.apps.listAccountsForPlan({
  plan_id,
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
    <tr><td>plan_id</td><td>yes</td><td>

plan_id parameter

</td></tr>
<tr><td>sort</td><td>no</td><td>

One of `created` (when the repository was starred) or `updated` (when it was last pushed to).

</td></tr>
<tr><td>direction</td><td>no</td><td>

To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan).

## List accounts for a plan (stubbed)

Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

```js
octokit.apps.listAccountsForPlanStubbed({
  plan_id,
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
    <tr><td>plan_id</td><td>yes</td><td>

plan_id parameter

</td></tr>
<tr><td>sort</td><td>no</td><td>

One of `created` (when the repository was starred) or `updated` (when it was last pushed to).

</td></tr>
<tr><td>direction</td><td>no</td><td>

To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan-stubbed).

## List repositories accessible to the user access token

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.

```js
octokit.apps.listInstallationReposForAuthenticatedUser({
  installation_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-user-access-token).

## List installations for the authenticated app

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

```js
octokit.apps.listInstallations();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>outdated</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#list-installations-for-the-authenticated-app).

## List app installations accessible to the user access token

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.

```js
octokit.apps.listInstallationsForAuthenticatedUser();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token).

## List plans

Lists all plans that are part of your GitHub Marketplace listing.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

```js
octokit.apps.listPlans();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-plans).

## List plans (stubbed)

Lists all plans that are part of your GitHub Marketplace listing.

GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.

```js
octokit.apps.listPlansStubbed();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-plans-stubbed).

## List repositories accessible to the app installation

List repositories that an app installation can access.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

```js
octokit.apps.listReposAccessibleToInstallation();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-app-installation).

## List subscriptions for the authenticated user

Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).

```js
octokit.apps.listSubscriptionsForAuthenticatedUser();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user).

## List subscriptions for the authenticated user (stubbed)

Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).

```js
octokit.apps.listSubscriptionsForAuthenticatedUserStubbed();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user-stubbed).

## Remove a repository from an app installation

Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.

```js
octokit.apps.removeRepoFromInstallation({
  installation_id,
  repository_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#remove-a-repository-from-an-app-installation).

## Reset a token

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

```js
octokit.apps.resetToken({
  client_id,
  access_token,
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
    <tr><td>client_id</td><td>yes</td><td>

The client ID of your GitHub app.

</td></tr>
<tr><td>access_token</td><td>yes</td><td>

The access_token of the OAuth application.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#reset-a-token).

## Revoke an installation access token

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

```js
octokit.apps.revokeInstallationAccessToken();
```

#### Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#revoke-an-installation-access-token).

## Create a scoped access token

Exchanges a non-repository scoped user-to-server OAuth access token for a repository scoped user-to-server OAuth access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

```js
octokit.apps.scopeToken({
  client_id,
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
    <tr><td>client_id</td><td>yes</td><td>

The client ID of your GitHub app.

</td></tr>
<tr><td>access_token</td><td>no</td><td>

**Required.** The OAuth access token used to authenticate to the GitHub API.

</td></tr>
<tr><td>target</td><td>no</td><td>

The name of the user or organization to scope the user-to-server access token to. **Required** unless `target_id` is specified.

</td></tr>
<tr><td>target_id</td><td>no</td><td>

The ID of the user or organization to scope the user-to-server access token to. **Required** unless `target` is specified.

</td></tr>
<tr><td>repositories</td><td>no</td><td>

The list of repository IDs to scope the user-to-server access token to. `repositories` may not be specified if `repository_ids` is specified.

</td></tr>
<tr><td>repository_ids</td><td>no</td><td>

The list of repository names to scope the user-to-server access token to. `repository_ids` may not be specified if `repositories` is specified.

</td></tr>
<tr><td>permissions</td><td>no</td><td>

The permissions granted to the user-to-server access token.

</td></tr>
<tr><td>permissions.actions</td><td>no</td><td>

The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.administration</td><td>no</td><td>

The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.checks</td><td>no</td><td>

The level of permission to grant the access token for checks on code. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.content_references</td><td>no</td><td>

The level of permission to grant the access token for notification of content references and creation content attachments. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.contents</td><td>no</td><td>

The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.deployments</td><td>no</td><td>

The level of permission to grant the access token for deployments and deployment statuses. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.environments</td><td>no</td><td>

The level of permission to grant the access token for managing repository environments. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.issues</td><td>no</td><td>

The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.metadata</td><td>no</td><td>

The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.packages</td><td>no</td><td>

The level of permission to grant the access token for packages published to GitHub Packages. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.pages</td><td>no</td><td>

The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.pull_requests</td><td>no</td><td>

The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.repository_hooks</td><td>no</td><td>

The level of permission to grant the access token to manage the post-receive hooks for a repository. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.repository_projects</td><td>no</td><td>

The level of permission to grant the access token to manage repository projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.

</td></tr>
<tr><td>permissions.secret_scanning_alerts</td><td>no</td><td>

The level of permission to grant the access token to view and manage secret scanning alerts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.secrets</td><td>no</td><td>

The level of permission to grant the access token to manage repository secrets. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.security_events</td><td>no</td><td>

The level of permission to grant the access token to view and manage security events like code scanning alerts. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.single_file</td><td>no</td><td>

The level of permission to grant the access token to manage just a single file. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.statuses</td><td>no</td><td>

The level of permission to grant the access token for commit statuses. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.vulnerability_alerts</td><td>no</td><td>

The level of permission to grant the access token to retrieve Dependabot alerts. Can be one of: `read`.

</td></tr>
<tr><td>permissions.workflows</td><td>no</td><td>

The level of permission to grant the access token to update GitHub Actions workflow files. Can be one of: `write`.

</td></tr>
<tr><td>permissions.members</td><td>no</td><td>

The level of permission to grant the access token for organization teams and members. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_administration</td><td>no</td><td>

The level of permission to grant the access token to manage access to an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_hooks</td><td>no</td><td>

The level of permission to grant the access token to manage the post-receive hooks for an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_plan</td><td>no</td><td>

The level of permission to grant the access token for viewing an organization's plan. Can be one of: `read`.

</td></tr>
<tr><td>permissions.organization_projects</td><td>no</td><td>

The level of permission to grant the access token to manage organization projects, columns, and cards. Can be one of: `read`, `write`, or `admin`.

</td></tr>
<tr><td>permissions.organization_secrets</td><td>no</td><td>

The level of permission to grant the access token to manage organization secrets. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_self_hosted_runners</td><td>no</td><td>

The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.organization_user_blocking</td><td>no</td><td>

The level of permission to grant the access token to view and manage users blocked by the organization. Can be one of: `read` or `write`.

</td></tr>
<tr><td>permissions.team_discussions</td><td>no</td><td>

The level of permission to grant the access token to manage team discussions and related comments. Can be one of: `read` or `write`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#create-a-scoped-access-token).

## Suspend an app installation

**Note:** Suspending a GitHub App installation is currently in beta and subject to change. Before you can suspend a GitHub App, the app owner must enable suspending installations for the app by opting-in to the beta. For more information, see "[Suspending a GitHub App installation](https://docs.github.com/apps/managing-github-apps/suspending-a-github-app-installation/)."

Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.suspendInstallation({
  installation_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#suspend-an-app-installation).

## Unsuspend an app installation

**Note:** Suspending a GitHub App installation is currently in beta and subject to change. Before you can suspend a GitHub App, the app owner must enable suspending installations for the app by opting-in to the beta. For more information, see "[Suspending a GitHub App installation](https://docs.github.com/apps/managing-github-apps/suspending-a-github-app-installation/)."

Removes a GitHub App installation suspension.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.unsuspendInstallation({
  installation_id,
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#unsuspend-an-app-installation).

## Update a webhook configuration for an app

Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.updateWebhookConfigForApp();
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
    <tr><td>url</td><td>no</td><td>

The URL to which the payloads will be delivered.

</td></tr>
<tr><td>content_type</td><td>no</td><td>

The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.

</td></tr>
<tr><td>secret</td><td>no</td><td>

If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).

</td></tr>
<tr><td>insecure_ssl</td><td>no</td><td>

Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps#update-a-webhook-configuration-for-an-app).

