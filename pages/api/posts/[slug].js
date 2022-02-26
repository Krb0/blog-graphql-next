import { gql, GraphQLClient } from 'graphql-request'
const graphqlAPI = process.env.GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN
export default async function PostGetter({ query: { slug } }, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
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
