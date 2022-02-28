import React from 'react'
import { Categories as ICategories } from '../../interfaces/Category'
import { Posts as IPosts } from '../../interfaces/Post'
import Categories from './Categories'
import PostWidget from './PostWidget'

interface IProps {
  relatedPosts: IPosts
  categories: ICategories
}
const Aside = (props: IProps) => {
  const { relatedPosts, categories: allCategories } = props
  return (
    <div className="col-span-1 lg:col-span-4">
      <div className="relative top-8 lg:sticky">
        <PostWidget relatedPosts={relatedPosts} />
        <Categories categories={allCategories} />
      </div>
    </div>
  )
}

export default Aside
