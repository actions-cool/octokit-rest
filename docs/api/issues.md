---
title: 'issues'
---

## Add assignees to an issue

Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

```js
octokit.issues.addAssignees({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>assignees</td><td>no</td><td>

Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#add-assignees-to-an-issue).

## Add labels to an issue

```js
octokit.issues.addLabels({
  owner,
  repo,
  issue_number,
  labels,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>labels</td><td>yes</td><td>

The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#add-labels-to-an-issue).

## Check if a user can be assigned

Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

```js
octokit.issues.checkUserCanBeAssigned({
  owner,
  repo,
  assignee,
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
<tr><td>assignee</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#check-if-a-user-can-be-assigned).

## Create an issue

Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.

```js
octokit.issues.create({
  owner,
  repo,
  title,
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
<tr><td>title</td><td>yes</td><td>

The title of the issue.

</td></tr>
<tr><td>body</td><td>no</td><td>

The contents of the issue.

</td></tr>
<tr><td>assignee</td><td>no</td><td>

Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_

</td></tr>
<tr><td>milestone</td><td>no</td><td>

</td></tr>
<tr><td>labels</td><td>no</td><td>

Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._

</td></tr>
<tr><td>assignees</td><td>no</td><td>

Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#create-an-issue).

## Create an issue comment

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.

```js
octokit.issues.createComment({
  owner,
  repo,
  issue_number,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>body</td><td>yes</td><td>

The contents of the comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#create-an-issue-comment).

## Create a label

```js
octokit.issues.createLabel({
  owner,
  repo,
  name,
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
<tr><td>name</td><td>yes</td><td>

The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).

</td></tr>
<tr><td>color</td><td>no</td><td>

The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the label.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#create-a-label).

## Create a milestone

```js
octokit.issues.createMilestone({
  owner,
  repo,
  title,
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
<tr><td>title</td><td>yes</td><td>

The title of the milestone.

</td></tr>
<tr><td>state</td><td>no</td><td>

The state of the milestone. Either `open` or `closed`.

</td></tr>
<tr><td>description</td><td>no</td><td>

A description of the milestone.

</td></tr>
<tr><td>due_on</td><td>no</td><td>

The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#create-a-milestone).

## Delete an issue comment

```js
octokit.issues.deleteComment({
  owner,
  repo,
  comment_id,
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
<tr><td>comment_id</td><td>yes</td><td>

comment_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#delete-an-issue-comment).

## Delete a label

```js
octokit.issues.deleteLabel({
  owner,
  repo,
  name,
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
<tr><td>name</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#delete-a-label).

## Delete a milestone

```js
octokit.issues.deleteMilestone({
  owner,
  repo,
  milestone_number,
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
<tr><td>milestone_number</td><td>yes</td><td>

milestone_number parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#delete-a-milestone).

## Get an issue

The API returns a [`301 Moved Permanently` status](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
[transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
to the [`issues`](https://docs.github.com/webhooks/event-payloads/#issues) webhook.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.

```js
octokit.issues.get({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#get-an-issue).

## Get an issue comment

```js
octokit.issues.getComment({
  owner,
  repo,
  comment_id,
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
<tr><td>comment_id</td><td>yes</td><td>

comment_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#get-an-issue-comment).

## Get an issue event

```js
octokit.issues.getEvent({
  owner,
  repo,
  event_id,
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
<tr><td>event_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#get-an-issue-event).

## Get a label

```js
octokit.issues.getLabel({
  owner,
  repo,
  name,
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
<tr><td>name</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#get-a-label).

## Get a milestone

```js
octokit.issues.getMilestone({
  owner,
  repo,
  milestone_number,
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
<tr><td>milestone_number</td><td>yes</td><td>

milestone_number parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#get-a-milestone).

## List issues assigned to the authenticated user

List issues assigned to the authenticated user across all visible repositories including owned repositories, member
repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
necessarily assigned to you.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.

```js
octokit.issues.list();
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
    <tr><td>filter</td><td>no</td><td>

Indicates which sorts of issues to return. Can be one of:  
\* `assigned`: Issues assigned to you  
\* `created`: Issues created by you  
\* `mentioned`: Issues mentioning you  
\* `subscribed`: Issues you're subscribed to updates for  
\* `all`: All issues the authenticated user can see, regardless of participation or creation

</td></tr>
<tr><td>state</td><td>no</td><td>

Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.

</td></tr>
<tr><td>labels</td><td>no</td><td>

A list of comma separated label names. Example: `bug,ui,@high`

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by. Can be either `created`, `updated`, `comments`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

One of `asc` (ascending) or `desc` (descending).

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>collab</td><td>no</td><td>

</td></tr>
<tr><td>orgs</td><td>no</td><td>

</td></tr>
<tr><td>owned</td><td>no</td><td>

</td></tr>
<tr><td>pulls</td><td>no</td><td>

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#list-issues-assigned-to-the-authenticated-user).

## List assignees

Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

```js
octokit.issues.listAssignees({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-assignees).

## List issue comments

Issue Comments are ordered by ascending ID.

```js
octokit.issues.listComments({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-issue-comments).

## List issue comments for a repository

By default, Issue Comments are ordered by ascending ID.

```js
octokit.issues.listCommentsForRepo({
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
<tr><td>sort</td><td>no</td><td>

One of `created` (when the repository was starred) or `updated` (when it was last pushed to).

</td></tr>
<tr><td>direction</td><td>no</td><td>

Either `asc` or `desc`. Ignored without the `sort` parameter.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-issue-comments-for-a-repository).

## List issue events

```js
octokit.issues.listEvents({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-issue-events).

## List issue events for a repository

```js
octokit.issues.listEventsForRepo({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-issue-events-for-a-repository).

## List timeline events for an issue

```js
octokit.issues.listEventsForTimeline({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-timeline-events-for-an-issue).

## List user account issues assigned to the authenticated user

List issues across owned and member repositories assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.

```js
octokit.issues.listForAuthenticatedUser();
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
    <tr><td>filter</td><td>no</td><td>

Indicates which sorts of issues to return. Can be one of:  
\* `assigned`: Issues assigned to you  
\* `created`: Issues created by you  
\* `mentioned`: Issues mentioning you  
\* `subscribed`: Issues you're subscribed to updates for  
\* `all`: All issues the authenticated user can see, regardless of participation or creation

</td></tr>
<tr><td>state</td><td>no</td><td>

Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.

</td></tr>
<tr><td>labels</td><td>no</td><td>

A list of comma separated label names. Example: `bug,ui,@high`

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by. Can be either `created`, `updated`, `comments`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

One of `asc` (ascending) or `desc` (descending).

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#list-user-account-issues-assigned-to-the-authenticated-user).

## List organization issues assigned to the authenticated user

List issues in an organization assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.

```js
octokit.issues.listForOrg({
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
<tr><td>filter</td><td>no</td><td>

Indicates which sorts of issues to return. Can be one of:  
\* `assigned`: Issues assigned to you  
\* `created`: Issues created by you  
\* `mentioned`: Issues mentioning you  
\* `subscribed`: Issues you're subscribed to updates for  
\* `all`: All issues the authenticated user can see, regardless of participation or creation

</td></tr>
<tr><td>state</td><td>no</td><td>

Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.

</td></tr>
<tr><td>labels</td><td>no</td><td>

A list of comma separated label names. Example: `bug,ui,@high`

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by. Can be either `created`, `updated`, `comments`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

One of `asc` (ascending) or `desc` (descending).

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#list-organization-issues-assigned-to-the-authenticated-user).

## List repository issues

List issues in a repository.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.

```js
octokit.issues.listForRepo({
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
<tr><td>milestone</td><td>no</td><td>

If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.

</td></tr>
<tr><td>state</td><td>no</td><td>

Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.

</td></tr>
<tr><td>assignee</td><td>no</td><td>

Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.

</td></tr>
<tr><td>creator</td><td>no</td><td>

The user that created the issue.

</td></tr>
<tr><td>mentioned</td><td>no</td><td>

A user that's mentioned in the issue.

</td></tr>
<tr><td>labels</td><td>no</td><td>

A list of comma separated label names. Example: `bug,ui,@high`

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by. Can be either `created`, `updated`, `comments`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

One of `asc` (ascending) or `desc` (descending).

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#list-repository-issues).

## List labels for issues in a milestone

```js
octokit.issues.listLabelsForMilestone({
  owner,
  repo,
  milestone_number,
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
<tr><td>milestone_number</td><td>yes</td><td>

milestone_number parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-labels-for-issues-in-a-milestone).

## List labels for a repository

```js
octokit.issues.listLabelsForRepo({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-labels-for-a-repository).

## List labels for an issue

```js
octokit.issues.listLabelsOnIssue({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-labels-for-an-issue).

## List milestones

```js
octokit.issues.listMilestones({
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
<tr><td>state</td><td>no</td><td>

The state of the milestone. Either `open`, `closed`, or `all`.

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by. Either `due_on` or `completeness`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction of the sort. Either `asc` or `desc`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-milestones).

## Lock an issue

Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."

```js
octokit.issues.lock({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>lock_reason</td><td>no</td><td>

The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  
\* `off-topic`  
\* `too heated`  
\* `resolved`  
\* `spam`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#lock-an-issue).

## Remove all labels from an issue

```js
octokit.issues.removeAllLabels({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#remove-all-labels-from-an-issue).

## Remove assignees from an issue

Removes one or more assignees from an issue.

```js
octokit.issues.removeAssignees({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>assignees</td><td>no</td><td>

Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#remove-assignees-from-an-issue).

## Remove a label from an issue

Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.

```js
octokit.issues.removeLabel({
  owner,
  repo,
  issue_number,
  name,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>name</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#remove-a-label-from-an-issue).

## Set labels for an issue

Removes any previous labels and sets the new labels for an issue.

```js
octokit.issues.setLabels({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>labels</td><td>no</td><td>

The names of the labels to add to the issue. You can pass an empty array to remove all labels. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#set-labels-for-an-issue).

## Unlock an issue

Users with push access can unlock an issue's conversation.

```js
octokit.issues.unlock({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#unlock-an-issue).

## Update an issue

Issue owners and users with push access can edit an issue.

```js
octokit.issues.update({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>title</td><td>no</td><td>

The title of the issue.

</td></tr>
<tr><td>body</td><td>no</td><td>

The contents of the issue.

</td></tr>
<tr><td>assignee</td><td>no</td><td>

Login for the user that this issue should be assigned to. **This field is deprecated.**

</td></tr>
<tr><td>state</td><td>no</td><td>

State of the issue. Either `open` or `closed`.

</td></tr>
<tr><td>milestone</td><td>no</td><td>

</td></tr>
<tr><td>labels</td><td>no</td><td>

Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._

</td></tr>
<tr><td>assignees</td><td>no</td><td>

Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/issues/#update-an-issue).

## Update an issue comment

```js
octokit.issues.updateComment({
  owner,
  repo,
  comment_id,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>comment_id</td><td>yes</td><td>

comment_id parameter

</td></tr>
<tr><td>body</td><td>yes</td><td>

The contents of the comment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#update-an-issue-comment).

## Update a label

```js
octokit.issues.updateLabel({
  owner,
  repo,
  name,
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
<tr><td>name</td><td>yes</td><td>

</td></tr>
<tr><td>new_name</td><td>no</td><td>

The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).

</td></tr>
<tr><td>color</td><td>no</td><td>

The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the label.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#update-a-label).

## Update a milestone

```js
octokit.issues.updateMilestone({
  owner,
  repo,
  milestone_number,
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
<tr><td>milestone_number</td><td>yes</td><td>

milestone_number parameter

</td></tr>
<tr><td>title</td><td>no</td><td>

The title of the milestone.

</td></tr>
<tr><td>state</td><td>no</td><td>

The state of the milestone. Either `open` or `closed`.

</td></tr>
<tr><td>description</td><td>no</td><td>

A description of the milestone.

</td></tr>
<tr><td>due_on</td><td>no</td><td>

The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#update-a-milestone).

