import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Demand implements Node {
    id: ID!
    name: String!
    client: Client!
    deadline: String
  }

  extend type Query {
    demands: [Demand]!
  }
`;

export const resolvers = {
  Query: {
    demands: async () => {
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000));
      return [];
    },
  },
};
