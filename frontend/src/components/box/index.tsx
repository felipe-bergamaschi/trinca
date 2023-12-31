import { Button } from "../button"
import { Stack } from "../stack"

import styles from './index.module.css'

interface BoxProps {
  title: string
  children: React.ReactNode
  buttonDisabled?: boolean
}

export function Box({ title, children, buttonDisabled }: BoxProps) {
  return (
    <Stack className={styles.container}>
      <Stack padding="md">
        {title}
      </Stack>

      <Stack padding="md" gap="md">
        {children}
      </Stack>

      <Stack padding="md" justify="end" direction="row" gap="md" className={styles.footer}>
        <Button type="submit" disabled={buttonDisabled}>
          Confirmar
        </Button>
      </Stack>
    </Stack>
  )
}