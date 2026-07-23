import React from 'react'

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
      <div style={{ width: '100%', maxWidth: '420px', padding: '24px', background: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
