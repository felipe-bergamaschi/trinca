"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainContext } from "@/contexts/main"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 1000 * 60 * 5
    }
  }
})

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