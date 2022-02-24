import React from 'react'
import Post from '../../../../interfaces/Post'
import getContentFragment from './getContentFragment'

interface IProps {
  post: Post
}

const PostContent = ({ post }: IProps) => {
  return (
    <>
      {post.content?.raw.children.map(
        (typeObj: { children: []; type: string }, index) => {
          const children = typeObj.children.map(
            (item: { text: string }, itemindex: number) =>
              getContentFragment(itemindex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        }
      )}
    </>
  )
}

export default PostContent
