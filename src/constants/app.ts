export const serverEndpont =
  process.env.NODE_ENV === 'production'
    ? 'https://pilar-website-server.fly.dev'
    : 'http://localhost:8080'
