import Post from './Post'

export default interface Comment {
  name: string
  email: string
  comment: string
  post: Post
}

export type Comments = Comment[]
