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
  port: 80,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({ typeDefs: `schema.graphql`, resolvers });
server.start(options);