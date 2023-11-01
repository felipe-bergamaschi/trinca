import { Icon } from "@/components/icon";
import { Stack } from "@/components/stack";
import { Text } from "@/components/text";

import styles from './index.module.css'

export function EventListDetails() {
  return (
    <Stack padding="md" gap="sm" className={styles.container}>
      <Text size="sm" color="secondary">Em 10 dias</Text>

      <Stack direction="row" gap="md">
        <Stack align="center" gap="sm">
          <Text variant="h1">10</Text>

          <Text color="secondary">Seg</Text>
        </Stack>

        <Stack gap="sm">
          <Text variant="h3">Nome do evento</Text>

          <Stack direction="row" gap="sm">
            <Icon name="place" color="var(--text-secondary)" />

            <Text color="secondary" variant="h5">Endereço do churrasco bem aqui</Text>
          </Stack>

          <Stack direction="row" justify="space-between">
            <Stack direction="row" gap="sm" align="center">
              <Icon name="group" color="var(--text-secondary)" />

              <Text color="secondary">12</Text>
            </Stack>

            <Stack direction="row" gap="sm" align="center">
              <Icon name="paid" color="var(--text-secondary)" />

              <Text color="secondary">R$ 100,00</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}