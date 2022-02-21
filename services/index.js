import { request, gql } from 'graphql-request'
export const getPosts = async () => {
  const query = gql`
    query PostsQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
            author {
              bio
              name
              id
              photo {
                url
              }
            }
          }
        }
      }
    }
  `

  const result = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query)
  return result.postsConnection.edges
}
