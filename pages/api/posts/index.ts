import { request, gql, GraphQLClient } from 'graphql-request'
import { NextApiRequest, NextApiResponse } from 'next'

const endpoint = process.env.GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN

export default async function Posts(req: NextApiRequest, res: NextApiResponse) {
  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
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

  const posts = await graphQLClient.request(query, {})
  const result = posts.postsConnection.edges.map(({ node }: { node: [] }) => {
    return { ...node }
  })
  res.status(200).json(result)
}
