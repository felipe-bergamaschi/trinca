import { Stack } from "@/components/stack";

import styles from './index.module.css'
import { Text } from "@/components/text";
import { IconButton } from "@/components/iconButton";
import { TextField } from "@/components/form/textField";
import { EventListDetails } from "../eventListDetails";
import { ListBarbecueResponse } from "@/query";
import { useState } from "react";
import debounce from "debounce";

interface EventListProps {
  data: ListBarbecueResponse | undefined;
  isLoading: boolean;
  onClick: (id: number) => void;
  onAddBarbecue: () => void;
  handleSearch: (value: string) => void;
}

export function EventList({ data, isLoading, onClick, onAddBarbecue, handleSearch }: EventListProps) {
  const debouncedSearch = debounce((value: string) => {
    handleSearch(value)
  }, 500)

  function handleChange(value: string) {
    debouncedSearch(value)
  }

  return (
    <Stack className={styles.container}>
      <Stack padding="sm" direction="row" align="center" justify="space-between">
        <Text size="lg" ml="md">
          Todos os churras
        </Text>

        <IconButton
          name="add"
          variant="sm"
          onClick={onAddBarbecue}
        />
      </Stack>

      <Stack padding="md">
        <TextField
          label="Pesquisar"
          name="search"
          placeholder="Pesquise por um churras..."
          // value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Stack>

      <Stack style={{ overflowY: 'auto' }} full>
        {!isLoading && data?.map((barbecue) => (
          <EventListDetails
            key={barbecue.id}
            data={barbecue}
            onClick={() => onClick(barbecue.id)}
          />
        ))}

        {data?.length === 0 && (
          <Stack align="center" justify="center" full>
            <Text>
              Nenhum churras encontrado {':('}
            </Text>
          </Stack>
        )}

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