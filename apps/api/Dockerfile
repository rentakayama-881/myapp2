FROM node:24.13.0-bookworm-slim AS base
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/api/package.json ./apps/api/package.json
RUN pnpm install --filter @myapp/api... --frozen-lockfile=false

FROM deps AS build
COPY . .
RUN pnpm --filter @myapp/api prisma:generate
ARG INSTALL_PLAYWRIGHT=false
RUN if [ "$INSTALL_PLAYWRIGHT" = "true" ]; then pnpm --filter @myapp/api exec playwright install --with-deps chromium; fi
RUN pnpm --filter @myapp/api build

FROM node:24.13.0-bookworm-slim AS runtime
WORKDIR /app
RUN corepack enable
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/apps/api/dist ./apps/api/dist
COPY --from=build /app/apps/api/prisma ./apps/api/prisma
COPY --from=build /app/apps/api/package.json ./apps/api/package.json
ENV NODE_ENV=production
EXPOSE 4000
CMD ["node", "apps/api/dist/main.js"]
