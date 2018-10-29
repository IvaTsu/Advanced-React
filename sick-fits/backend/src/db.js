const { Prisma } = require("prisma-binding");

// Establishing connection to the remote Prisma DB and allows to do queries with JS
const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
