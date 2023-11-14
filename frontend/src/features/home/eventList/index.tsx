"use client";

import { Stack } from "@/components/stack";

import styles from './index.module.css'
import { Text } from "@/components/text";
import { IconButton } from "@/components/iconButton";
import { TextField } from "@/components/form/textField";
import { EventListDetails } from "../eventListDetails";
import { useListBarbecue } from "@/query";

export function EventList() {
  const { data, isLoading } = useListBarbecue()

  return (
    <Stack className={styles.container}>
      <Stack padding="sm" direction="row" align="center" justify="space-between">
        <Text size="lg" ml="md">
          Todos os churras
        </Text>

        <IconButton
          name="add"
          variant="sm"
        />
      </Stack>

      <Stack padding="md">
        <TextField
          label="Pesquisar"
          name="search"
          placeholder="Pesquise por um churras..."
        />
      </Stack>

      <Stack style={{ overflowY: 'auto' }} full>
        {!isLoading && data?.map((barbecue) => (
          <EventListDetails
            key={barbecue.id}
            data={barbecue}
          />
        ))}

        {isLoading && (
          <Stack align="center" justify="center" full>
            <Text>
              Carregando...
            </Text>
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}