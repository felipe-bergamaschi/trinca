import { Stack } from "@/components/stack";

import styles from './index.module.css'
import { Text } from "@/components/text";
import { IconButton } from "@/components/iconButton";

export function EventList() {
  return (
    <Stack
      style={{ background: '#ddd' }}
      className={styles.container}
    >
      <Stack padding="sm" direction="row" align="center" justify="space-between">
        <Text size="lg" ml="md">
          Churras
        </Text>

        <IconButton
          name="add"
          variant="sm"
        />
      </Stack>

      <Stack padding="md">
        <div style={{ background: 'red' }}>listagem</div>
        <div >listagem</div>
      </Stack>

    </Stack>
  )
}