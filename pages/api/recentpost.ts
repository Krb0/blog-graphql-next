import { gql, GraphQLClient } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Posts } from '../../interfaces/Post'
const endpoint = process.env.GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN

export default async function RecentPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
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

  const graphRes = await graphQLClient.request(query)
  const posts: Posts = graphRes.posts
  res.status(200).json(posts)
}
