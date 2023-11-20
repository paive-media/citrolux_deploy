module.exports = ({env}) => ({
  host: env('HOST', '127.0.0.1'),
  url: env("PUBLIC_URL", "https://citrolux.ru/cms"),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  cron: {
    enabled: env.bool('CRON_ENABLED', true),
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['*'],
    },
  },
});
