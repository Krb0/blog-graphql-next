import { request, gql } from 'graphql-request'
export const getPosts = async () => {
  const query = gql`
    query PostsQuery {
      postsConnection {
        edges {
          node {
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
      }
    }
  `

  const res = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query)
  const result = res.postsConnection.edges.map(({ node }) => {
    return { ...node }
  })
  return result
}

export const getRecentPosts = async () => {
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

  const res = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query)
  const result = res.posts.map((post) => {
    return { ...post }
  })
  console.log(result)
  return result
}
export const getSimilarPosts = async (categories, slug) => {
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

  return result.posts
}

export const getCategories = async (categories) => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  const result = await request(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, query)
  return result.categories
}
