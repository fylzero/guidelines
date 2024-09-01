# Git

## Branch Naming Convention

Git branches should follow these naming convention rules.

- Branch names should be all lowercase
- They should contain the type of work - bug, feature, task, hotfix, etc.
- Followed by a forward slash `/`
- The product name - raise, pay, events, etc.
- Followed by a dash `-`
- The Jira issue number
- Another forward slash `/`
- Finally a short description of the issue in kebab-case

:white_check_mark: Accepted:

```
feature/raise-125/add-modal-to-create-campaign
bug/pay-234/fix-validation-issue-for-payments
hotfix/events-432/fix-sso-login-redirect
```

:x: Denied:

```
145-Fixed-it
535
BUG/RAISE/123/added-validation-to-donor-create
```

## Repository Naming Convention

Git repos should follow these naming convention rules.

- All lower case
- Kebob cased (no spaces, underscores, or special characters)
