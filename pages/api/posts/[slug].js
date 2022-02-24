import { request, gql } from 'graphql-request'
export default async function PostGetter({ query: { slug } }, res) {
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

  const result = await request(
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
    query,
    variables
  )
  res.status(200).json(result.post)
}
