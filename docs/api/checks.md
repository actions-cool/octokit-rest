---
title: 'checks'
---

## Create a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.

In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.

```js
octokit.checks.create({
        owner,
repo,
name,
head_sha,
output.title,
output.summary,
output.annotations[].path,
output.annotations[].start_line,
output.annotations[].end_line,
output.annotations[].annotation_level,
output.annotations[].message,
output.images[].alt,
output.images[].image_url,
actions[].label,
actions[].description,
actions[].identifier
      })
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
<tr><td>name</td><td>yes</td><td>

The name of the check. For example, "code-coverage".

</td></tr>
<tr><td>head_sha</td><td>yes</td><td>

The SHA of the commit.

</td></tr>
<tr><td>details_url</td><td>no</td><td>

The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.

</td></tr>
<tr><td>external_id</td><td>no</td><td>

A reference for the run on the integrator's system.

</td></tr>
<tr><td>status</td><td>no</td><td>

The current status. Can be one of `queued`, `in_progress`, or `completed`.

</td></tr>
<tr><td>started_at</td><td>no</td><td>

The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>conclusion</td><td>no</td><td>

**Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`. When the conclusion is `action_required`, additional details should be provided on the site specified by `details_url`.  
**Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`.

</td></tr>
<tr><td>completed_at</td><td>no</td><td>

The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>output</td><td>no</td><td>

Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object) description.

</td></tr>
<tr><td>output.title</td><td>yes</td><td>

The title of the check run.

</td></tr>
<tr><td>output.summary</td><td>yes</td><td>

The summary of the check run. This parameter supports Markdown.

</td></tr>
<tr><td>output.text</td><td>no</td><td>

The details of the check run. This parameter supports Markdown.

</td></tr>
<tr><td>output.annotations</td><td>no</td><td>

Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://docs.github.com/rest/reference/checks#annotations-object) description for details about how to use this parameter.

</td></tr>
<tr><td>output.annotations[].path</td><td>yes</td><td>

The path of the file to add an annotation to. For example, `assets/css/main.css`.

</td></tr>
<tr><td>output.annotations[].start_line</td><td>yes</td><td>

The start line of the annotation.

</td></tr>
<tr><td>output.annotations[].end_line</td><td>yes</td><td>

The end line of the annotation.

</td></tr>
<tr><td>output.annotations[].start_column</td><td>no</td><td>

The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.

</td></tr>
<tr><td>output.annotations[].end_column</td><td>no</td><td>

The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.

</td></tr>
<tr><td>output.annotations[].annotation_level</td><td>yes</td><td>

The level of the annotation. Can be one of `notice`, `warning`, or `failure`.

</td></tr>
<tr><td>output.annotations[].message</td><td>yes</td><td>

A short description of the feedback for these lines of code. The maximum size is 64 KB.

</td></tr>
<tr><td>output.annotations[].title</td><td>no</td><td>

The title that represents the annotation. The maximum size is 255 characters.

</td></tr>
<tr><td>output.annotations[].raw_details</td><td>no</td><td>

Details about this annotation. The maximum size is 64 KB.

</td></tr>
<tr><td>output.images</td><td>no</td><td>

Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://docs.github.com/rest/reference/checks#images-object) description for details.

</td></tr>
<tr><td>output.images[].alt</td><td>yes</td><td>

The alternative text for the image.

</td></tr>
<tr><td>output.images[].image_url</td><td>yes</td><td>

The full URL of the image.

</td></tr>
<tr><td>output.images[].caption</td><td>no</td><td>

A short image description.

</td></tr>
<tr><td>actions</td><td>no</td><td>

Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)." To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."

</td></tr>
<tr><td>actions[].label</td><td>yes</td><td>

The text to be displayed on a button in the web UI. The maximum size is 20 characters.

</td></tr>
<tr><td>actions[].description</td><td>yes</td><td>

A short explanation of what this action would do. The maximum size is 40 characters.

</td></tr>
<tr><td>actions[].identifier</td><td>yes</td><td>

A reference for the action on the integrator's system. The maximum size is 20 characters.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#create-a-check-run).

## Create a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.

```js
octokit.checks.createSuite({
  owner,
  repo,
  head_sha,
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
<tr><td>head_sha</td><td>yes</td><td>

The sha of the head commit.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#create-a-check-suite).

## Get a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

```js
octokit.checks.get({
  owner,
  repo,
  check_run_id,
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
<tr><td>check_run_id</td><td>yes</td><td>

check_run_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#get-a-check-run).

## Get a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

```js
octokit.checks.getSuite({
  owner,
  repo,
  check_suite_id,
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
<tr><td>check_suite_id</td><td>yes</td><td>

check_suite_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#get-a-check-suite).

## List check run annotations

Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.

```js
octokit.checks.listAnnotations({
  owner,
  repo,
  check_run_id,
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
<tr><td>check_run_id</td><td>yes</td><td>

check_run_id parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#list-check-run-annotations).

## List check runs for a Git reference

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

```js
octokit.checks.listForRef({
  owner,
  repo,
  ref,
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
<tr><td>ref</td><td>yes</td><td>

ref+ parameter

</td></tr>
<tr><td>check_name</td><td>no</td><td>

Returns check runs with the specified `name`.

</td></tr>
<tr><td>status</td><td>no</td><td>

Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.

</td></tr>
<tr><td>filter</td><td>no</td><td>

Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#list-check-runs-for-a-git-reference).

## List check runs in a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

```js
octokit.checks.listForSuite({
  owner,
  repo,
  check_suite_id,
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
<tr><td>check_suite_id</td><td>yes</td><td>

check_suite_id parameter

</td></tr>
<tr><td>check_name</td><td>no</td><td>

Returns check runs with the specified `name`.

</td></tr>
<tr><td>status</td><td>no</td><td>

Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.

</td></tr>
<tr><td>filter</td><td>no</td><td>

Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#list-check-runs-in-a-check-suite).

## List check suites for a Git reference

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

```js
octokit.checks.listSuitesForRef({
  owner,
  repo,
  ref,
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
<tr><td>ref</td><td>yes</td><td>

ref+ parameter

</td></tr>
<tr><td>app_id</td><td>no</td><td>

Filters check suites by GitHub App `id`.

</td></tr>
<tr><td>check_name</td><td>no</td><td>

Returns check runs with the specified `name`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference).

## Rerequest a check suite

Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

```js
octokit.checks.rerequestSuite({
  owner,
  repo,
  check_suite_id,
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
<tr><td>check_suite_id</td><td>yes</td><td>

check_suite_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#rerequest-a-check-suite).

## Update repository preferences for check suites

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

```js
octokit.checks.setSuitesPreferences({
        owner,
repo,
auto_trigger_checks[].app_id,
auto_trigger_checks[].setting
      })
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
<tr><td>auto_trigger_checks</td><td>no</td><td>

Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://docs.github.com/rest/reference/checks#auto_trigger_checks-object) description for details.

</td></tr>
<tr><td>auto_trigger_checks[].app_id</td><td>yes</td><td>

The `id` of the GitHub App.

</td></tr>
<tr><td>auto_trigger_checks[].setting</td><td>yes</td><td>

Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites).

## Update a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.

```js
octokit.checks.update({
        owner,
repo,
check_run_id,
output.summary,
output.annotations[].path,
output.annotations[].start_line,
output.annotations[].end_line,
output.annotations[].annotation_level,
output.annotations[].message,
output.images[].alt,
output.images[].image_url,
actions[].label,
actions[].description,
actions[].identifier
      })
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
<tr><td>check_run_id</td><td>yes</td><td>

check_run_id parameter

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the check. For example, "code-coverage".

</td></tr>
<tr><td>details_url</td><td>no</td><td>

The URL of the integrator's site that has the full details of the check.

</td></tr>
<tr><td>external_id</td><td>no</td><td>

A reference for the run on the integrator's system.

</td></tr>
<tr><td>started_at</td><td>no</td><td>

This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>status</td><td>no</td><td>

The current status. Can be one of `queued`, `in_progress`, or `completed`.

</td></tr>
<tr><td>conclusion</td><td>no</td><td>

**Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`.  
**Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`.

</td></tr>
<tr><td>completed_at</td><td>no</td><td>

The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>output</td><td>no</td><td>

Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://docs.github.com/rest/reference/checks#output-object-1) description.

</td></tr>
<tr><td>output.title</td><td>no</td><td>

**Required**.

</td></tr>
<tr><td>output.summary</td><td>yes</td><td>

Can contain Markdown.

</td></tr>
<tr><td>output.text</td><td>no</td><td>

Can contain Markdown.

</td></tr>
<tr><td>output.annotations</td><td>no</td><td>

Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://docs.github.com/rest/reference/checks#annotations-object-1) description for details.

</td></tr>
<tr><td>output.annotations[].path</td><td>yes</td><td>

The path of the file to add an annotation to. For example, `assets/css/main.css`.

</td></tr>
<tr><td>output.annotations[].start_line</td><td>yes</td><td>

The start line of the annotation.

</td></tr>
<tr><td>output.annotations[].end_line</td><td>yes</td><td>

The end line of the annotation.

</td></tr>
<tr><td>output.annotations[].start_column</td><td>no</td><td>

The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.

</td></tr>
<tr><td>output.annotations[].end_column</td><td>no</td><td>

The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.

</td></tr>
<tr><td>output.annotations[].annotation_level</td><td>yes</td><td>

The level of the annotation. Can be one of `notice`, `warning`, or `failure`.

</td></tr>
<tr><td>output.annotations[].message</td><td>yes</td><td>

A short description of the feedback for these lines of code. The maximum size is 64 KB.

</td></tr>
<tr><td>output.annotations[].title</td><td>no</td><td>

The title that represents the annotation. The maximum size is 255 characters.

</td></tr>
<tr><td>output.annotations[].raw_details</td><td>no</td><td>

Details about this annotation. The maximum size is 64 KB.

</td></tr>
<tr><td>output.images</td><td>no</td><td>

Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://docs.github.com/rest/reference/checks#annotations-object-1) description for details.

</td></tr>
<tr><td>output.images[].alt</td><td>yes</td><td>

The alternative text for the image.

</td></tr>
<tr><td>output.images[].image_url</td><td>yes</td><td>

The full URL of the image.

</td></tr>
<tr><td>output.images[].caption</td><td>no</td><td>

A short image description.

</td></tr>
<tr><td>actions</td><td>no</td><td>

Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."

</td></tr>
<tr><td>actions[].label</td><td>yes</td><td>

The text to be displayed on a button in the web UI. The maximum size is 20 characters.

</td></tr>
<tr><td>actions[].description</td><td>yes</td><td>

A short explanation of what this action would do. The maximum size is 40 characters.

</td></tr>
<tr><td>actions[].identifier</td><td>yes</td><td>

A reference for the action on the integrator's system. The maximum size is 20 characters.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#update-a-check-run).

