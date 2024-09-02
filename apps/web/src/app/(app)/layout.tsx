import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

type AppLayoutProps = Readonly<{
  children: React.ReactNode
  teste: React.ReactNode
}>

export default async function AppLayout({ children, teste }: AppLayoutProps) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }

  return (
    <>
      {children} {teste}
    </>
  )
}
