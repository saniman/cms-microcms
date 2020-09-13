import { ApolloServer } from "apollo-server-micro";
import MicroCMSAPI from "../../datasources/index";
import schema from '../../apollo/schema'

const apolloServer = new ApolloServer({
  schema,
  dataSources: () => ({ microCMSAPI: new MicroCMSAPI() }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
