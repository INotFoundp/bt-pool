const isProductions = process.env.NODE_ENV === 'production'

const HOST = isProductions ? "https://btpool.net" : "http://localhost:3000";

export default HOST
