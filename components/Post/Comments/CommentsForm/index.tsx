import React, { useState, useRef, FormEvent } from 'react'
import { useSession } from 'next-auth/react'
import { submitComment } from '../../../../services'
import { Comments as IComments } from '../../../../interfaces/Comment'
import SubmitButton from './SubmitButton'
import Inputs from './Inputs'
interface IProps {
  slug: string
  comments: IComments
  setComments: React.Dispatch<React.SetStateAction<[] | IComments>>
}

const CommentsForm = ({ slug, comments, setComments }: IProps) => {
  const { data: session } = useSession()
  const [error, setError] = useState<string>('')
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false)
  const commentEl = useRef<HTMLTextAreaElement>(null)
  const nameEl = useRef<HTMLInputElement>(null)
  const emailEl = useRef<HTMLInputElement>(null)
  const handleCommentSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError('')
    const comment = commentEl?.current?.value
    const name = nameEl?.current?.value
    const email = emailEl?.current?.value
    if (!comment || !name || !email) {
      setError('All fields are required')
      return
    }
    const countUserMessages: Boolean =
      comments.filter(({ image }) => image === session!.user!.image).length > 2

    if (countUserMessages) {
      setError('Message Limit Exceeded')
      return
    }
    interface IComment {
      name: string
      email: string
      comment: string
      slug: string
      image: string
    }
    const commentObj: IComment = {
      name,
      email,
      comment,
      slug,
      image: session!.user!.image!,
    }
    submitComment(commentObj)
    const commentArray: IComments = [...comments, commentObj]
    setComments(commentArray)
    commentEl.current.value = ''
    emailEl.current.value = ''
  }

  return (
    <div className="pbg-12 mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Post a Comment! +
      </h3>
      <form onSubmit={(e) => handleCommentSubmission(e)}>
        <Inputs
          TextAreaRef={commentEl}
          UserInfoNameRef={nameEl}
          UserInfoEmailRef={emailEl}
        />
        {error && <p className="text-xs text-red-500">{error}.</p>}
        <SubmitButton
          setError={setError}
          showSuccessMessage={showSuccessMessage}
        />
      </form>
    </div>
  )
}

export default CommentsForm
