import { request, gql } from 'graphql-request'
export default async function Posts(req, res) {
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
              slug
              photo {
                url
              }
            }
          }
        }
      }
    }
  `

  const posts = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query)
  const result = posts.postsConnection.edges.map(({ node }) => {
    return { ...node }
  })
  res.status(200).json(result)
}
