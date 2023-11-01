import { Stack } from "@/components/stack";
import { Text } from "@/components/text";

import styles from './index.module.css'

export function EventDetails() {
  return (
    <Stack padding="md" full className={styles.container}>
      <Stack gap="sm">
        <Text size="lg">
          Detalhes do churras
        </Text>


        <Stack direction="row" align="center" gap="sm">
          <Text variant='h5' color="secondary">Churras{' > '}</Text>

          <Text variant='h5' color="secondary">Nome do churras</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}