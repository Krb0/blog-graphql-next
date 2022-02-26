import React, { useEffect, useState } from 'react'
import { Posts } from '../interfaces/Post'
const useRelatedPosts = (
  categories: string[] | undefined,
  slug: string | undefined | string[]
) => {
  const [relatedPosts, setRelatedPosts] = useState<[] | Posts>([])

  useEffect(() => {
    if (slug) {
      fetch('/api/similarpost', {
        method: 'POST',
        body: JSON.stringify({ categories: categories, slug: slug }),
      })
        .then((res: { json: () => Promise<{ posts: Posts }> }) => res.json())
        .then((res: { posts: Posts }) => setRelatedPosts(res.posts))
    } else {
      fetch('/api/recentpost', {
        method: 'POST',
      })
        .then((res: { json: () => Promise<Posts> }) => res.json())
        .then((res: Posts) => setRelatedPosts(res))
    }
  }, [slug])
  return [relatedPosts]
}

export default useRelatedPosts
