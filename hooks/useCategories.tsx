import React, { useEffect, useState } from 'react'
import { Categories } from '../interfaces/Category'
import { getCategories } from '../services'

const useCategories = () => {
  const [categories, setCategories] = useState<Categories | []>([])
  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((newCategories: Categories) => setCategories([...newCategories]))
  }, [])
  return [categories]
}

export default useCategories
