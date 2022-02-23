import React from 'react'
import CommentsList from './CommentsList'
import CommentsForm from './CommentsForm'

interface IProps {
  slug: string
}
const Comments = ({ slug }: IProps) => {
  return (
    <div>
      <CommentsList slug={slug} />
      <CommentsForm slug={slug} />
    </div>
  )
}

export default Comments
