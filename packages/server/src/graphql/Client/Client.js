import { gql } from 'apollo-server-express';
import createRepository from '../../io/Database/createRepository';

const clientRepository = createRepository('client');

export const typeDefs = gql`
  type Client implements Node {
    id: ID!
    name: String!
    email: String!
    disabled: Boolean!
  }

  extend type Query {
    client(id: ID!): Client
    clients: [Client!]!
  }
`;

export const resolvers = {
  Query: {
    client: async (_, { id }) => {
      const clients = await clientRepository.read();
      return clients.find((client) => client.id === id);
    },
    clients: async () => {
      const clients = await clientRepository.read();
      return clients;
    },
  },
};
