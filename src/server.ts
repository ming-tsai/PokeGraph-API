import { GraphQLServer } from "graphql-yoga";
import axios from "axios";
import { getPageInfo } from './utils/page-info';

const baseURL = `https://pokeapi.co/api/v2`

const resolvers = {
  Query: {
    abilities: async (_: any, { first, after }: any) => {
      const response = await axios.get(`${baseURL}/ability/?offset=${after}&limit=${first}`);
      let result = response.data;
      result.pageInfo = getPageInfo(result.count, first, after);
      return result;
    },
  },
}

const options = {
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
}

const server = new GraphQLServer({ typeDefs: `schema.graphql`, resolvers });
server.start(options, ({ port }) => {
  console.log(`GraphQL service on http://localhost:${port}`);
});