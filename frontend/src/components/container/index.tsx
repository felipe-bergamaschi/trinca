import { Stack } from "../stack";
import { Text } from "../text";

import styles from './index.module.css';

interface ContainerProps {
  title: string;
  breadcrumb: string[];
  children: React.ReactNode;
}

export function Container({ title, breadcrumb, children }: ContainerProps) {
  return (
    <Stack align="center" full className={styles.container}>
      <Stack full className={styles.content}>
        <Stack padding="md" gap="md" full>
          <Stack gap="sm">
            <Text size="lg">
              {title}
            </Text>

            <Stack direction="row" align="center" gap="sm">
              <Text variant='h5' color="secondary">
                {['Churras', ...breadcrumb].join(' > ')}
              </Text>
            </Stack>
          </Stack>

          <Stack gap="md" full>
            {children}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}