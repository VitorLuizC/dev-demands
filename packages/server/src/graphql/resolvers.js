import { resolvers as nodeResolvers } from './Node/Node';
import { resolvers as demandResolvers } from './Demand/Demand';

const resolvers = {
  ...demandResolvers,
  ...nodeResolvers,

  Query: {
    ...demandResolvers.Query,
  },
};

export default resolvers;
