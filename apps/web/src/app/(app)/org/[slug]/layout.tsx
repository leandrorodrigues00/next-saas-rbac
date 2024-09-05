import { Header } from '@/components/header'
import { Tabs } from '@/components/tabs'

type AppLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function OrgLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <div className="pt-6">
        <Header />
        <Tabs />
      </div>

      <main className="mx-auto w-full max-w-[1200px] py-4">{children}</main>
    </div>
  )
}
