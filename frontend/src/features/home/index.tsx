"use client"

import { Stack } from '@/components/stack'
import { EventList } from './eventList'
import { EventDetails } from './eventDetails'
import { useListBarbecue } from '@/query'
import { useState } from 'react'
import { BarbecueDetails } from './barbecueDetails'

export function HomePage() {
  const { data, isLoading, refetch } = useListBarbecue()

  const [barbecueDetails, setBarbecueDetails] = useState<number | null>(null)

  return (
    <Stack direction='row' full>
      <EventList
        data={data}
        isLoading={isLoading}
        onClick={(id) => setBarbecueDetails(id)}
        onAddBarbecue={() => setBarbecueDetails(null)}
      />

      {barbecueDetails ? (
        <BarbecueDetails
          barbecueId={barbecueDetails}
          onClose={() => setBarbecueDetails(null)}
          onDelete={() => {
            setBarbecueDetails(null)
            refetch()
          }}
        />
      ) : (
        <EventDetails
          refetch={refetch}
        />
      )}
    </Stack>
  )
}
