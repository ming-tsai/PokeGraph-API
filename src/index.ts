import { GraphQLServer } from 'graphql-yoga';
import axios from "axios";

const baseURL = `https://pokeapi.co/api/v2`

const resolvers = {
  Query: {
    abilities: async (_: any, { first, after }: any) => {
      const response = await axios.get(`${baseURL}/ability/?offset=${after}&limit=${first}`);
      return response.data;
    },
  },
}

const options = {
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({ typeDefs: `${__dirname}/schema.graphql`, resolvers });
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port http://localhost:${port}/playground for incoming requests.`,
  ),
)