import Author from './Author'
import { Categories } from './Category'
export default interface Post {
  title: string
  excerpt: string
  featuredImage: {
    url: string
  }
  slug: string
  author: Author
  createdAt: string
  categories?: Categories
}

export type Posts = Post[]
