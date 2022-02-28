import { useSession } from 'next-auth/react'
import React from 'react'

const SubmitButton = ({
  showSuccessMessage,
  setError,
}: {
  showSuccessMessage: boolean
  setError: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { data: session } = useSession()
  return (
    <div className="mt-8">
      {session ? (
        <button
          type="submit"
          className="post-comment-button ease-in-out hover:bg-[#0077DC]"
        >
          Post Comment
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setError('You have to log in first!')}
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
  )
}

export default SubmitButton
