import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

type AppLayoutProps = Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>

export default async function AppLayout({ children, sheet }: AppLayoutProps) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }

  return (
    <>
      {children}
      {sheet}
    </>
  )
}
