import { resolvers as nodeResolvers } from './Node/Node';
import { resolvers as clientResolvers } from './Client/Client';
import { resolvers as demandResolvers } from './Demand/Demand';

const resolvers = {
  ...nodeResolvers,
  ...clientResolvers,
  ...demandResolvers,

  Query: {
    ...clientResolvers.Query,
    ...demandResolvers.Query,
  },
};

export default resolvers;
