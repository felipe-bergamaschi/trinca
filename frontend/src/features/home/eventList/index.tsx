import { Stack } from "@/components/stack";

import styles from './index.module.css'
import { Text } from "@/components/text";
import { IconButton } from "@/components/iconButton";
import { TextField } from "@/components/form/textField";
import { EventDetails } from "../eventDetails";

export function EventList() {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <EventDetails />
        ))}
      </Stack>
    </Stack>
  )
}