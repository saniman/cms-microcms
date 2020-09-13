
const resolvers = {
    Query: {
      allPosts: async (parent, {id}, { dataSources }) => {
        const allPosts = await dataSources.microCMSAPI.getAllPosts(id);
        return allPosts;
      },
      postByID: async (parent, { id, draftKey }, {dataSources}) => {
          return dataSources.microCMSAPI.getPostByID(id, draftKey)
      }
    },
  };

  export default resolvers

