import { CommonLayout } from '@/components/layout/common'
import { Stack } from '@/components/stack'
import { Login } from '@/features/login'
import { MockLogin } from '@/features/login/mock'
import { Suspense } from 'react'

function Teste() {
  return <div>teste</div>
}

export default function Home() {
  return (
    <CommonLayout actions={<Teste />}>
      <Stack direction='row' full>
        <Stack
          style={{ background: '#ddd' }}
        >
          <div >listagem</div>
          <div >listagem</div>

        </Stack>

        <Stack full style={{ background: '#ccc' }}>
          <div >detalhes</div>

        </Stack>

      </Stack>
    </CommonLayout>
  )
}
