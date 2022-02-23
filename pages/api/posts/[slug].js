import { request, gql } from 'graphql-request'
export default async function PostGetter({ query: { slug } }, res) {
  const query = gql`
    query GetPostDetails($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
        author {
          bio
          name
          id
          photo {
            url
          }
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
  res.status(200).json(result.posts[0])
}
