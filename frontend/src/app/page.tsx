import { AuthLayout } from '@/components/layout/auth'
import { Login } from '@/features/login'
import { Suspense } from 'react'

export default function Home() {
  return (
    <AuthLayout>
      <Suspense fallback={<div>carregando...</div>}>
        <Login />
      </Suspense>
    </AuthLayout>
  )
}
