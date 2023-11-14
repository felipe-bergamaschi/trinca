"use client"

import { Stack } from '@/components/stack'
import { EventList } from './eventList'
import { EventDetails } from './eventDetails'
import { useListBarbecue } from '@/query'

export function HomePage() {
  const { data, isLoading, refetch } = useListBarbecue()

  return (
    <Stack direction='row' full>
      <EventList
        data={data}
        isLoading={isLoading}
      />

      <EventDetails
        refetch={refetch}
      />
    </Stack>
  )
}
