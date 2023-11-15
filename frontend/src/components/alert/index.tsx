import { Icon } from "../icon";
import { Stack } from "../stack";
import { Text } from "../text";

import styles from './index.module.css'

interface AlertProps {
  title: string
  children: React.ReactNode
  hideIcon?: boolean
}

export function Alert({ title, children, hideIcon = false }: AlertProps) {
  return (
    <Stack className={styles.container} padding="md" gap="md">
      <Stack direction="row" gap="md" align="center">
        {!hideIcon && (
          <Icon name="info" color="var(--text-secondary)" />
        )}

        <Text color="secondary">
          {title}
        </Text>
      </Stack>

      <Stack>
        <Text>
          {children}
        </Text>
      </Stack>
    </Stack>
  )
}