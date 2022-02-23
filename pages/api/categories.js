import { request, gql } from 'graphql-request'

export default async function Categories(req, res) {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  const result = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query)
  res.status(200).json(result.categories)
}
