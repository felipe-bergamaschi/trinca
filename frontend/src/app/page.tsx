import { CommonLayout } from '@/components/layout/common'
import { Login } from '@/features/login'
import { MockLogin } from '@/features/login/mock'
import { Suspense } from 'react'

export default function Home() {
  return (
    <CommonLayout>
      {/* <Suspense fallback={<MockLogin />}>
        <Login />
      </Suspense> */}
    </CommonLayout>
  )
}
