import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Client implements Node {
    id: ID!
    name: String!
  }
`;
