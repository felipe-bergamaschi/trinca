import { Icon } from "../icon";
import { Stack } from "../stack";
import { Text } from "../text";

import styles from './index.module.css'

interface AlertProps {
  title: string
  children: React.ReactNode
}

export function Alert({ title, children }: AlertProps) {
  return (
    <Stack className={styles.container} padding="md" gap="md">
      <Stack direction="row" gap="md" align="center">
        <Icon name="info" color="var(--text-secondary)" />

        <Text>
          {title}
        </Text>
      </Stack>

      <Stack>
        <Text color="secondary">
          {children}
        </Text>
      </Stack>
    </Stack>
  )
}