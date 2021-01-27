---
title: 'migrations'
---

## Cancel an import

Stop an import for a repository.

```js
octokit.migrations.cancelImport({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#cancel-an-import).

## Delete a user migration archive

Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/reference/migrations#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.

```js
octokit.migrations.deleteArchiveForAuthenticatedUser({
  migration_id,
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
    <tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#delete-a-user-migration-archive).

## Delete an organization migration archive

Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

```js
octokit.migrations.deleteArchiveForOrg({
  org,
  migration_id,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#delete-an-organization-migration-archive).

## Download an organization migration archive

Fetches the URL to a migration archive.

```js
octokit.migrations.downloadArchiveForOrg({
  org,
  migration_id,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#download-an-organization-migration-archive).

## Download a user migration archive

Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:

- attachments
- bases
- commit_comments
- issue_comments
- issue_events
- issues
- milestones
- organizations
- projects
- protected_branches
- pull_request_reviews
- pull_requests
- releases
- repositories
- review_comments
- schema
- users

The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.

```js
octokit.migrations.getArchiveForAuthenticatedUser({
  migration_id,
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
    <tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).

## Get commit authors

Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.

This endpoint and the [Map a commit author](https://docs.github.com/rest/reference/migrations#map-a-commit-author) endpoint allow you to provide correct Git author information.

```js
octokit.migrations.getCommitAuthors({
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
<tr><td>since</td><td>no</td><td>

A user ID. Only return users with an ID greater than this ID.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#get-commit-authors).

## Get an import status

View the progress of an import.

**Import status**

This section includes details about the possible values of the `status` field of the Import Progress response.

An import that does not have errors will progress through these steps:

- `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
- `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
- `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
- `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
- `complete` - the import is complete, and the repository is ready on GitHub.

If there are problems, you will see one of these in the `status` field:

- `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
- `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information.
- `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
- `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/reference/migrations#cancel-an-import) and [retry](https://docs.github.com/rest/reference/migrations#start-an-import) with the correct URL.
- `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.

**The project_choices field**

When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.

**Git LFS related fields**

This section includes details about Git LFS related fields that may be present in the Import Progress response.

- `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
- `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
- `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
- `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.

```js
octokit.migrations.getImportStatus({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#get-an-import-status).

## Get large files

List files larger than 100MB found during the import

```js
octokit.migrations.getLargeFiles({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#get-large-files).

## Get a user migration status

Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:

- `pending` - the migration hasn't started yet.
- `exporting` - the migration is in progress.
- `exported` - the migration finished successfully.
- `failed` - the migration failed.

Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).

```js
octokit.migrations.getStatusForAuthenticatedUser({
  migration_id,
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
    <tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
<tr><td>exclude</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status).

## Get an organization migration status

Fetches the status of a migration.

The `state` of a migration can be one of the following values:

- `pending`, which means the migration hasn't started yet.
- `exporting`, which means the migration is in progress.
- `exported`, which means the migration finished successfully.
- `failed`, which means the migration failed.

```js
octokit.migrations.getStatusForOrg({
  org,
  migration_id,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#get-an-organization-migration-status).

## List user migrations

Lists all migrations a user has started.

```js
octokit.migrations.listForAuthenticatedUser();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#list-user-migrations).

## List organization migrations

Lists the most recent migrations.

```js
octokit.migrations.listForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#list-organization-migrations).

## List repositories in an organization migration

List all the repositories for this organization migration.

```js
octokit.migrations.listReposForOrg({
  org,
  migration_id,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#list-repositories-in-an-organization-migration).

## List repositories for a user migration

Lists all the repositories for this user migration.

```js
octokit.migrations.listReposForUser({
  migration_id,
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
    <tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#list-repositories-for-a-user-migration).

## Map a commit author

Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.

```js
octokit.migrations.mapCommitAuthor({
  owner,
  repo,
  author_id,
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
<tr><td>author_id</td><td>yes</td><td>

</td></tr>
<tr><td>email</td><td>no</td><td>

The new Git author email.

</td></tr>
<tr><td>name</td><td>no</td><td>

The new Git author name.

</td></tr>
<tr><td>remote_id</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#map-a-commit-author).

## Update Git LFS preference

You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).

```js
octokit.migrations.setLfsPreference({
  owner,
  repo,
  use_lfs,
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
<tr><td>use_lfs</td><td>yes</td><td>

Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#update-git-lfs-preference).

## Start a user migration

Initiates the generation of a user migration archive.

```js
octokit.migrations.startForAuthenticatedUser({
  repositories,
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
    <tr><td>lock_repositories</td><td>no</td><td>

Lock the repositories being migrated at the start of the migration

</td></tr>
<tr><td>exclude_attachments</td><td>no</td><td>

Do not include attachments in the migration

</td></tr>
<tr><td>exclude</td><td>no</td><td>

Exclude attributes from the API response to improve performance

</td></tr>
<tr><td>repositories</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#start-a-user-migration).

## Start an organization migration

Initiates the generation of a migration archive.

```js
octokit.migrations.startForOrg({
  org,
  repositories,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>repositories</td><td>yes</td><td>

A list of arrays indicating which repositories should be migrated.

</td></tr>
<tr><td>lock_repositories</td><td>no</td><td>

Indicates whether repositories should be locked (to prevent manipulation) while migrating data.

</td></tr>
<tr><td>exclude_attachments</td><td>no</td><td>

Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).

</td></tr>
<tr><td>exclude</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#start-an-organization-migration).

## Start an import

Start a source import to a GitHub repository using GitHub Importer.

```js
octokit.migrations.startImport({
  owner,
  repo,
  vcs_url,
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
<tr><td>vcs_url</td><td>yes</td><td>

The URL of the originating repository.

</td></tr>
<tr><td>vcs</td><td>no</td><td>

The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.

</td></tr>
<tr><td>vcs_username</td><td>no</td><td>

If authentication is required, the username to provide to `vcs_url`.

</td></tr>
<tr><td>vcs_password</td><td>no</td><td>

If authentication is required, the password to provide to `vcs_url`.

</td></tr>
<tr><td>tfvc_project</td><td>no</td><td>

For a tfvc import, the name of the project that is being imported.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#start-an-import).

## Unlock a user repository

Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/reference/migrations#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/reference/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.

```js
octokit.migrations.unlockRepoForAuthenticatedUser({
  migration_id,
  repo_name,
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
    <tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
<tr><td>repo_name</td><td>yes</td><td>

repo_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#unlock-a-user-repository).

## Unlock an organization repository

Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/reference/repos#delete-a-repository) when the migration is complete and you no longer need the source data.

```js
octokit.migrations.unlockRepoForOrg({
  org,
  migration_id,
  repo_name,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>migration_id</td><td>yes</td><td>

migration_id parameter

</td></tr>
<tr><td>repo_name</td><td>yes</td><td>

repo_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#unlock-an-organization-repository).

## Update an import

An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
request. If no parameters are provided, the import will be restarted.

```js
octokit.migrations.updateImport({
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
<tr><td>vcs_username</td><td>no</td><td>

The username to provide to the originating repository.

</td></tr>
<tr><td>vcs_password</td><td>no</td><td>

The password to provide to the originating repository.

</td></tr>
<tr><td>vcs</td><td>no</td><td>

</td></tr>
<tr><td>tfvc_project</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#update-an-import).

