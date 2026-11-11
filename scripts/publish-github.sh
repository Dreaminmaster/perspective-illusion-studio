#!/usr/bin/env bash
# Publish the prepared repository only under the account explicitly supplied.
set -euo pipefail
OWNER="${1:-}"
REPO="${2:-perspective-illusion-studio}"
if [[ -z "$OWNER" ]]; then
  echo 'Usage: bash scripts/publish-github.sh <your-github-username> [repository-name]'
  exit 2
fi
for command in git gh; do
  if ! command -v "$command" >/dev/null 2>&1; then
    echo "Required tool missing: $command"
    exit 3
  fi
done
CURRENT="$(gh api user --jq .login 2>/dev/null || true)"
if [[ -z "$CURRENT" ]]; then
  echo 'GitHub CLI is not logged in. Run: gh auth login'
  exit 4
fi
if [[ "$CURRENT" != "$OWNER" ]]; then
  echo "Refusing to publish to the wrong account. Connected: $CURRENT ; requested: $OWNER"
  exit 5
fi
if gh repo view "$OWNER/$REPO" >/dev/null 2>&1; then
  echo "Repository $OWNER/$REPO already exists. Not overwriting it."
  exit 6
fi
if [[ -z "$(git config user.name || true)" || -z "$(git config user.email || true)" ]]; then
  echo 'Set git config user.name and user.email before publishing.'
  exit 7
fi
if [[ ! -d .git ]]; then git init -b main; fi
git add -A
if ! git diff --cached --quiet; then git commit -m "Initial release: Perspective Illusion Studio v1.0.0"; fi
gh repo create "$OWNER/$REPO" --public --source=. --remote=origin --push
printf '\nPublished: https://github.com/%s/%s\n' "$OWNER" "$REPO"
