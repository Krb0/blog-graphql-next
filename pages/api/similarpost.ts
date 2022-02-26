import { request, gql, GraphQLClient } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

const endpoint = process.env.GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN

export default async function SimilarPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await graphQLClient.request(query, JSON.parse(req.body))
  res.status(200).json(result)
}
