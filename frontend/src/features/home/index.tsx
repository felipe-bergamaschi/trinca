"use client"

import { Stack } from '@/components/stack'
import { EventList } from './eventList'

export async function HomePage() {
  return (
    <Stack direction='row' full>
      <EventList />

      <Stack full style={{ background: '#ccc' }}>
        <div >detalhes</div>

      </Stack>

    </Stack>
  )
}
