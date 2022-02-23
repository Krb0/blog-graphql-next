import React from 'react'
import Categories from './Categories'
import PostWidget from './PostWidget'

interface IProps {
  slug?: string | string[]
}
const Aside = (props: IProps) => {
  const { slug } = props
  return (
    <div className="col-span-1 lg:col-span-4">
      <div className="relative top-8 lg:sticky">
        <PostWidget slug={slug} />
        <Categories />
      </div>
    </div>
  )
}

export default Aside
