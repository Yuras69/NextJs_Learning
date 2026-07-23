import React from 'react'

type AdminLayoutProps = {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: '#f3f4f6' }}>
      <aside style={{ width: '240px', background: '#111827', color: 'white', padding: '24px' }}>
        <h2 style={{ margin: 0 }}>Admin Panel</h2>
        <p style={{ marginTop: '8px', color: '#d1d5db' }}>Protected admin area</p>
      </aside>
      <main style={{ flex: 1, padding: '24px' }}>{children}</main>
    </div>
  )
}

export default AdminLayout
