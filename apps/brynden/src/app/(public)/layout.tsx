import { ReactNode } from 'react'

import { Header } from '@/components/Header'

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
