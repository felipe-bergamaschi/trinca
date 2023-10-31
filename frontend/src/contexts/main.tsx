"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

interface MainContextProps {
  children: React.ReactNode
}

export function MainContext({ children }: MainContextProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}