---
title: 'git'
---

## Create a blob

```js
octokit.git.createBlob({
  owner,
  repo,
  content,
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
<tr><td>content</td><td>yes</td><td>

The new blob's content.

</td></tr>
<tr><td>encoding</td><td>no</td><td>

The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-blob).

## Create a commit

Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                |
| `payload`   | `string`  | The value that was signed.                                                                       |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

```js
octokit.git.createCommit({
  owner,
  repo,
  message,
  tree,
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
<tr><td>message</td><td>yes</td><td>

The commit message

</td></tr>
<tr><td>tree</td><td>yes</td><td>

The SHA of the tree object this commit points to

</td></tr>
<tr><td>parents</td><td>no</td><td>

The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.

</td></tr>
<tr><td>author</td><td>no</td><td>

Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.

</td></tr>
<tr><td>author.name</td><td>no</td><td>

The name of the author (or committer) of the commit

</td></tr>
<tr><td>author.email</td><td>no</td><td>

The email of the author (or committer) of the commit

</td></tr>
<tr><td>author.date</td><td>no</td><td>

Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>committer</td><td>no</td><td>

Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.

</td></tr>
<tr><td>committer.name</td><td>no</td><td>

The name of the author (or committer) of the commit

</td></tr>
<tr><td>committer.email</td><td>no</td><td>

The email of the author (or committer) of the commit

</td></tr>
<tr><td>committer.date</td><td>no</td><td>

Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>signature</td><td>no</td><td>

The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-commit).

## Create a reference

Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

```js
octokit.git.createRef({
  owner,
  repo,
  ref,
  sha,
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
<tr><td>ref</td><td>yes</td><td>

The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.

</td></tr>
<tr><td>sha</td><td>yes</td><td>

The SHA1 value for this reference.

</td></tr>
<tr><td>key</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-reference).

## Create a tag object

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/rest/reference/git#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/rest/reference/git#create-a-reference) the tag reference - this call would be unnecessary.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                |
| `payload`   | `string`  | The value that was signed.                                                                       |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

```js
octokit.git.createTag({
  owner,
  repo,
  tag,
  message,
  object,
  type,
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
<tr><td>tag</td><td>yes</td><td>

The tag's name. This is typically a version (e.g., "v0.0.1").

</td></tr>
<tr><td>message</td><td>yes</td><td>

The tag message.

</td></tr>
<tr><td>object</td><td>yes</td><td>

The SHA of the git object this is tagging.

</td></tr>
<tr><td>type</td><td>yes</td><td>

The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.

</td></tr>
<tr><td>tagger</td><td>no</td><td>

An object with information about the individual creating the tag.

</td></tr>
<tr><td>tagger.name</td><td>no</td><td>

The name of the author of the tag

</td></tr>
<tr><td>tagger.email</td><td>no</td><td>

The email of the author of the tag

</td></tr>
<tr><td>tagger.date</td><td>no</td><td>

When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-tag-object).

## Create a tree

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.

If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/rest/reference/git#update-a-reference)."

```js
octokit.git.createTree({
  owner,
  repo,
  tree,
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
<tr><td>tree</td><td>yes</td><td>

Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.

</td></tr>
<tr><td>tree[].path</td><td>no</td><td>

The file referenced in the tree.

</td></tr>
<tr><td>tree[].mode</td><td>no</td><td>

The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.

</td></tr>
<tr><td>tree[].type</td><td>no</td><td>

Either `blob`, `tree`, or `commit`.

</td></tr>
<tr><td>tree[].sha</td><td>no</td><td>

The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.

**Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.

</td></tr>
<tr><td>tree[].content</td><td>no</td><td>

The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.

**Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.

</td></tr>
<tr><td>base_tree</td><td>no</td><td>

The SHA1 of an existing Git tree object which will be used as the base for the new tree. If provided, a new Git tree object will be created from entries in the Git tree object pointed to by `base_tree` and entries defined in the `tree` parameter. Entries defined in the `tree` parameter will overwrite items from `base_tree` with the same `path`. If you're creating new changes on a branch, then normally you'd set `base_tree` to the SHA1 of the Git tree object of the current latest commit on the branch you're working on.
If not provided, GitHub will create a new Git tree object from only the entries defined in the `tree` parameter. If you create a new commit pointing to such a tree, then all files which were a part of the parent commit's tree and were not defined in the `tree` parameter will be listed as deleted by the new commit.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-tree).

## Delete a reference

```js
octokit.git.deleteRef({
  owner,
  repo,
  ref,
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
<tr><td>ref</td><td>yes</td><td>

ref+ parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#delete-a-reference).

## Get a blob

The `content` in the response will always be Base64 encoded.

_Note_: This API supports blobs up to 100 megabytes in size.

```js
octokit.git.getBlob({
  owner,
  repo,
  file_sha,
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
<tr><td>file_sha</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#get-a-blob).

## Get a commit

Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                |
| `payload`   | `string`  | The value that was signed.                                                                       |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

```js
octokit.git.getCommit({
  owner,
  repo,
  commit_sha,
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

commit_sha parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#get-a-commit).

## Get a reference

Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

```js
octokit.git.getRef({
  owner,
  repo,
  ref,
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
<tr><td>ref</td><td>yes</td><td>

ref+ parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#get-a-reference).

## Get a tag

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

| Name        | Type      | Description                                                                                      |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| `verified`  | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified.                  |
| `reason`    | `string`  | The reason for verified value. Possible values and their meanings are enumerated in table below. |
| `signature` | `string`  | The signature that was extracted from the commit.                                                |
| `payload`   | `string`  | The value that was signed.                                                                       |

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |

```js
octokit.git.getTag({
  owner,
  repo,
  tag_sha,
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
<tr><td>tag_sha</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#get-a-tag).

## Get a tree

Returns a single tree using the SHA1 value for that tree.

If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.

```js
octokit.git.getTree({
  owner,
  repo,
  tree_sha,
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
<tr><td>tree_sha</td><td>yes</td><td>

</td></tr>
<tr><td>recursive</td><td>no</td><td>

Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `"true"`, and `"false"`. Omit this parameter to prevent recursively returning objects or subtrees.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#get-a-tree).

## List matching references

Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.

When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.

```js
octokit.git.listMatchingRefs({
  owner,
  repo,
  ref,
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
<tr><td>ref</td><td>yes</td><td>

ref+ parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#list-matching-references).

## Update a reference

```js
octokit.git.updateRef({
  owner,
  repo,
  ref,
  sha,
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
<tr><td>ref</td><td>yes</td><td>

ref+ parameter

</td></tr>
<tr><td>sha</td><td>yes</td><td>

The SHA1 value to set this reference to

</td></tr>
<tr><td>force</td><td>no</td><td>

Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#update-a-reference).

