import { GraphQLServer } from "graphql-yoga";
import { RootQuery } from './graphql/root-query';
import { getOptions as options } from './graphql/config';

const resolvers = {
  Query: {
    ...RootQuery
  },
}

const server = new GraphQLServer({
  typeDefs: `schema.graphql`, resolvers: resolvers as any
});
server.start(options, ({ port }) => {
  console.log(`GraphQL service on http://localhost:${port}`);
});