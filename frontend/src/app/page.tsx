import { AuthLayout } from '@/components/layout/auth'
import { Login } from '@/features/login'
import { MockLogin } from '@/features/login/mock'
import { Suspense } from 'react'

export default function Home() {
  return (
    <AuthLayout>
      <Suspense fallback={<MockLogin />}>
        <Login />
      </Suspense>
    </AuthLayout>
  )
}
