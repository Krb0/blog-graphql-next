import { request, gql, GraphQLClient } from 'graphql-request'
import { Categories as ICategories } from '../../interfaces/Category'
import type { NextApiRequest, NextApiResponse } from 'next'
const endpoint = process.env.GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN
export default async function Categories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  const result: { categories: ICategories } = await graphQLClient.request(query)
  res.status(200).json(result.categories)
}
