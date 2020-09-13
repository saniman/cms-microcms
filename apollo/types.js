import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    allPosts(id: String): AllPosts
    postByID(id: String, draftKey: String): Contents
  }
  type Picture {
    url: String
  }
  type Author {
    id: String
    createdAt: String
    updatedAt: String
    publishedAt: String
    name: String
    picture: Picture
  }

  type CoverImage {
    url: String
  }

  type Contents {
    id: String
    createdAt: String
    updatedAt: String
    publishedAt: String
    title: String
    slug: String
    excerpt: String
    date: String
    author: Author
    coverImage: CoverImage
    content: String
  }

  type AllPosts {
    totalCount: Int
    offset: Int
    limit: Int
    contents: [Contents]
  }
`;

export default typeDefs;
