import React, { useEffect, useState } from 'react'
import CommentsList from './CommentsList'
import CommentsForm from './CommentsForm'
import { Comments as IComments } from '../../../interfaces/Comment'

interface IProps {
  slug: string
}
const Comments = ({ slug }: IProps) => {
  const [comments, setComments] = useState<[] | IComments>([])

  useEffect(() => {
    fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ slug: slug }),
    })
      .then((res) => res.json())
      .then((res) => setComments(res))
  }, [])
  return (
    <div>
      <CommentsList comments={comments} setComments={setComments} slug={slug} />
      <CommentsForm comments={comments} setComments={setComments} slug={slug} />
    </div>
  )
}

export default Comments
