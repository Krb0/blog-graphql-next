import Post from './Post'

export default interface Comment {
  name: string
  email: string
  comment: string
  image: string
  slug: string
  id?: string
  createdAt?: string
  post?: Post
}

export type Comments = Comment[]
