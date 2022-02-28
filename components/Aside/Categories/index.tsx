import React from 'react'

import Link from 'next/link'
import { Categories as ICategories } from '../../../interfaces/Category'

const Categories = ({ categories }: { categories: ICategories }) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories?.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3 text-black">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
