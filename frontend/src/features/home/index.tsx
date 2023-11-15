"use client"

import { Stack } from '@/components/stack'
import { EventList } from './eventList'
import { EventDetails } from './eventDetails'
import { useListBarbecue, useSearchBarbecue } from '@/query'
import { useState } from 'react'
import { BarbecueDetails } from './barbecueDetails'

export function HomePage() {
  const { data: listBarbecue, isLoading, refetch } = useListBarbecue()
  const { data: searchData, mutateAsync } = useSearchBarbecue()

  const [barbecueDetails, setBarbecueDetails] = useState<number | null>(null)
  const [search, setSearch] = useState<string | null>(null)

  const data = search ? searchData : listBarbecue

  function handleSearch(value: string) {
    if (!value || value.length <= 2 || value.length > 100) {
      setSearch(null)
      return
    }

    setSearch(value)
    mutateAsync({
      data: {
        search: value
      }
    })
  }

  return (
    <Stack direction='row' full>
      <EventList
        data={data}
        isLoading={isLoading}
        onClick={(id) => setBarbecueDetails(id)}
        onAddBarbecue={() => setBarbecueDetails(null)}
        handleSearch={handleSearch}
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
