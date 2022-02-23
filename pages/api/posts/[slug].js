export default async function PostGetter({ query: { slug } }, res) {
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
  const result = await request(
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
    query,
    { slug, categories }
  )

  res.status(200).json(result.posts)
}
