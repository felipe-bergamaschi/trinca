"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainContext } from "@/contexts/main"

const queryClient = new QueryClient()

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContext>
        {children}
      </MainContext>
    </QueryClientProvider>
  )
}