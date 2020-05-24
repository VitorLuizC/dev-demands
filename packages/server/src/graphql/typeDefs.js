import { gql } from 'apollo-server-express';

import { typeDefs as clientTypeDefs } from './Client/Client';
import { typeDefs as demandTypeDefs } from './Demand/Demand';

const typeDefs = gql`
  type Query {
    _root: String
  }

  ${clientTypeDefs}
  ${demandTypeDefs}
`;

export default typeDefs;
