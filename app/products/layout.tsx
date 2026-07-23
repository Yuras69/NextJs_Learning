import React from 'react'

type ProductsLayoutProps = {
  children: React.ReactNode
}

const layout = ({ children }: ProductsLayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
