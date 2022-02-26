import { GraphQLClient, gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

const endpoint = process.env.GRAPHCMS_ENDPOINT

export default async function Comment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = process.env.GRAPHCMS_TOKEN
  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  const createQuery = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $image: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          image: $image
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `
  const publishQuery = gql`
    mutation PublishComment($id: ID!) {
      publishComment(where: { id: $id }, to: PUBLISHED) {
        stage
      }
    }
  `

  const result = await graphQLClient.request(createQuery, JSON.parse(req.body))
  await graphQLClient.request(publishQuery, { id: result.createComment.id })
  return res.status(200).send(result)
}
