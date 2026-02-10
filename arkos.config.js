/** @type {import('arkos').ArkosConfig} */
const config = {
  routers: {
    strict: "no-bulk"
  },
  swagger: {
    mode: 'prisma',
    strict: false,
  },
  middlewares: {
    cors: {
      allowedOrigins: process.env.NODE_ENV !== "production" ? "*" : "your-production-url"
    },
  }
}

export default config
