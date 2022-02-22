import React, { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'
import { Posts } from '../interfaces/Post'
const useRelatedPosts = (
  categories: string[] | undefined,
  slug: string | undefined
) => {
  const [relatedPosts, setRelatedPosts] = useState<[] | Posts>([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res: []) => {
        setRelatedPosts(res)
      })
    } else {
      getRecentPosts().then((res: []) => {
        setRelatedPosts(res)
      })
    }
  }, [slug])
  return [relatedPosts]
}

export default useRelatedPosts
