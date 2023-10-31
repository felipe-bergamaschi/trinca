import { MainContext } from "@/contexts/main"

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <MainContext>
      {children}
    </MainContext>
  )
}