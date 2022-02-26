import React, { useState, useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { submitComment } from '../../../../services'
interface IProps {
  slug: string
}

const CommentsForm = ({ slug }: IProps) => {
  const { data: session } = useSession()
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef<HTMLTextAreaElement>(null)
  const nameEl = useRef<HTMLInputElement>(null)
  const emailEl = useRef<HTMLInputElement>(null)
  const handleCommentSubmission = () => {
    setError(false)
    const comment = commentEl?.current?.value
    const name = nameEl?.current?.value
    const email = emailEl?.current?.value
    if (!comment || !name || !email) {
      setError(true)
      return
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    }
    submitComment(commentObj)
  }

  return (
    <div className="pbg-12 mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">CommentForm</h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="w-full rounded-lg border-2 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          rows={5}
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg border-2 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
          value={session?.user?.name ? session.user.name : ''}
          readOnly
        />
        <input
          type="text"
          ref={emailEl}
          className="w-full rounded-lg border-2 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>

      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        {session ? (
          <button
            type="button"
            onClick={handleCommentSubmission}
            className="post-comment-button ease-in-out hover:bg-[#0077DC]"
          >
            Post Comment
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCommentSubmission}
            className="post-comment-button bg-gray-300 ease-in-out hover:bg-gray-400 "
          >
            Post Comment
          </button>
        )}

        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
