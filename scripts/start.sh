#!/bin/sh
set -x

# Function to ensure URL has protocol
ensure_protocol() {
  url="$1"
  if [ -z "$url" ]; then
    echo ""
  elif echo "$url" | grep -qE "^https?://"; then
    echo "$url"
  else
    echo "https://$url"
  fi
}

# Ensure all URL environment variables have protocol
if [ -n "$NEXT_PUBLIC_WEBAPP_URL" ]; then
  export NEXT_PUBLIC_WEBAPP_URL=$(ensure_protocol "$NEXT_PUBLIC_WEBAPP_URL")
fi

if [ -n "$NEXTAUTH_URL" ]; then
  export NEXTAUTH_URL=$(ensure_protocol "$NEXTAUTH_URL")
fi

if [ -n "$NEXT_PUBLIC_WEBSITE_URL" ]; then
  export NEXT_PUBLIC_WEBSITE_URL=$(ensure_protocol "$NEXT_PUBLIC_WEBSITE_URL")
fi

# Replace the statically built BUILT_NEXT_PUBLIC_WEBAPP_URL with run-time NEXT_PUBLIC_WEBAPP_URL
# NOTE: if these values are the same, this will be skipped.
scripts/replace-placeholder.sh "$BUILT_NEXT_PUBLIC_WEBAPP_URL" "$NEXT_PUBLIC_WEBAPP_URL"

scripts/wait-for-it.sh ${DATABASE_HOST} -- echo "database is up"
npx prisma migrate deploy --schema /calcom/packages/prisma/schema.prisma
npx ts-node --transpile-only /calcom/scripts/seed-app-store.ts
# Run Next.js directly to avoid Yarn 4 registry detection issues
cd /calcom/apps/web && npx next start
