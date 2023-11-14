"use client"

import { Stack } from '@/components/stack'
import { EventList } from './eventList'
import { EventDetails } from './eventDetails'

export function HomePage() {
  return (
    <Stack direction='row' full>
      <EventList />

      <EventDetails />
    </Stack>
  )
}
