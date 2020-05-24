import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
  }
`;
