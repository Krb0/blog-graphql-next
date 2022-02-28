import React from 'react'
import { Categories } from '../../interfaces/Category'
import Header from './Header'
type IProps = {
  children: JSX.Element
  categories: Categories
}
const Layout = (props: IProps) => {
  const { children, categories } = props
  return (
    <>
      <Header categories={categories} />

      {children}
    </>
  )
}

export default Layout
