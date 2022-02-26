import React from 'react'
import Header from './Header'
type IProps = {
  children: JSX.Element
}
const Layout = (props: IProps) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
