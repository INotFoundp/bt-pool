const isProductions = process.env.NODE_ENV === 'production'

const HOST = isProductions ? "http://65.109.213.136" : "http://localhost:3000";

export default HOST