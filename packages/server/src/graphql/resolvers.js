import { resolvers as demandResolvers } from './Demand/Demand';

const resolvers = {
  ...demandResolvers,

  Query: {
    ...demandResolvers.Query,
  },
};

export default resolvers;
