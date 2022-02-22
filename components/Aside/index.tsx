import React from 'react'
import Categories from './Categories'
import PostWidget from './PostWidget'

const Aside = () => {
  return (
    <div className="col-span-1 lg:col-span-4">
      <div className="relative top-8 lg:sticky">
        <PostWidget />
        <Categories />
      </div>
    </div>
  )
}

export default Aside
