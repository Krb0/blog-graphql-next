import { gql, GraphQLClient } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Comments } from '../../interfaces/Comment'
export default async function Comments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const endpoint = process.env.GRAPHCMS_ENDPOINT
  const token = process.env.GRAPHCMS_TOKEN
  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        ...comments
      }
    }
  `
  const result: { comments: Comments } = await graphQLClient.request(
    query,
    JSON.parse(req.body)
  )
  res.status(200).json(result.comments)
}
