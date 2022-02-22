import Author from './Author'
export default interface Post {
  title: string
  excerpt: string
  featuredImage: {
    url: string
  }
  slug: string
  author: Author
  createdAt: string
}

export type Posts = Post[]
