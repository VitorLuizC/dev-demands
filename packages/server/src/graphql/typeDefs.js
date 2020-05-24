import { gql } from 'apollo-server-express';

import { typeDefs as nodeTypeDefs } from './Node/Node';
import { typeDefs as clientTypeDefs } from './Client/Client';
import { typeDefs as demandTypeDefs } from './Demand/Demand';

const typeDefs = gql`
  type Query {
    _root: String
  }

  ${nodeTypeDefs}
  ${clientTypeDefs}
  ${demandTypeDefs}
`;

export default typeDefs;
