import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <nav>
            <Link href="/aboutus">aboutus</Link>
          {/* No prefetching */}
          <a href="/aboutus/[aboutsus]">[aboutsus]</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default layout

