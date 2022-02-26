import { gql, GraphQLClient } from 'graphql-request'
import { NextApiRequest, NextApiResponse } from 'next'
const endpoint = process.env.GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN
export default async function PostGetter(
  { query: { slug } }: NextApiRequest,
  res: NextApiResponse
) {
  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
          slug
        }
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
        content {
          raw
        }
      }
    }
  `
  const variables = {
    slug: slug,
  }

  const result = await graphQLClient.request(query, variables)
  res.status(200).json(result.post)
}
