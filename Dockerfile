FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# Create .env.production
ARG NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
ENV NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ${NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}

# Firebase
ARG NEXT_PUBLIC_FIREBASE_API_KEY
ENV NEXT_PUBLIC_FIREBASE_API_KEY ${NEXT_PUBLIC_FIREBASE_API_KEY}

ARG NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}

ARG NEXT_PUBLIC_FIREBASE_PROJECT_ID
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID ${NEXT_PUBLIC_FIREBASE_PROJECT_ID}

ARG NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ${NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}

ARG NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ${NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}

ARG NEXT_PUBLIC_FIREBASE_APP_ID
ENV NEXT_PUBLIC_FIREBASE_APP_ID ${NEXT_PUBLIC_FIREBASE_APP_ID}

ARG NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
ENV NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ${NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}

# IVAO
ARG NEXT_PUBLIC_IVAO_CLIENT_ID
ENV NEXT_PUBLIC_IVAO_CLIENT_ID ${NEXT_PUBLIC_IVAO_CLIENT_ID}

ARG NEXT_PUBLIC_IVAO_CLIENT_SECRET
ENV NEXT_PUBLIC_IVAO_CLIENT_SECRET ${NEXT_PUBLIC_IVAO_CLIENT_SECRET}

# Vatsim
ARG NEXT_PUBLIC_VATSIM_CLIENT_ID
ENV NEXT_PUBLIC_VATSIM_CLIENT_ID ${NEXT_PUBLIC_VATSIM_CLIENT_ID}

ARG NEXT_PUBLIC_VATSIM_CLIENT_SECRET
ENV NEXT_PUBLIC_VATSIM_CLIENT_SECRET ${NEXT_PUBLIC_VATSIM_CLIENT_SECRET}

# Navigraph
ARG NEXT_PUBLIC_NAVIGRAPH_CLIENT_ID
ENV NEXT_PUBLIC_NAVIGRAPH_CLIENT_ID ${NEXT_PUBLIC_NAVIGRAPH_CLIENT_ID}

ARG NEXT_PUBLIC_NAVIGRAPH_CLIENT_SECRET
ENV NEXT_PUBLIC_NAVIGRAPH_CLIENT_SECRET ${NEXT_PUBLIC_NAVIGRAPH_CLIENT_SECRET}

# Workspace
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL ${NEXT_PUBLIC_BASE_URL}

ARG NEXT_PUBLIC_NODE_ENV
ENV NEXT_PUBLIC_NODE_ENV ${NEXT_PUBLIC_NODE_ENV}

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

ENV PORT 8080
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
