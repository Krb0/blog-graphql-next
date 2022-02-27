import React, { RefObject } from 'react'

const TextArea = ({
  TextAreaRef,
}: {
  TextAreaRef: RefObject<HTMLTextAreaElement>
}) => {
  return (
    <div className="mb-4 grid grid-cols-1 gap-4">
      <textarea
        ref={TextAreaRef}
        className="w-full rounded-lg border-2 bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
        placeholder="Comment"
        rows={5}
        name="comment"
        minLength={20}
        required
      />
    </div>
  )
}

export default TextArea
