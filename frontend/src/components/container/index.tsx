import { IconButton } from "../iconButton";
import { Stack } from "../stack";
import { Text } from "../text";

import styles from './index.module.css';

interface ContainerProps {
  title: string;
  breadcrumb: string[];
  children: React.ReactNode;
  onClose?: () => void;
}

export function Container({ title, breadcrumb, children, onClose }: ContainerProps) {
  return (
    <Stack align="center" full className={styles.container}>
      <Stack full className={styles.content}>
        <Stack padding="md" gap="md" full>
          <Stack direction="row" align="center" gap="md" justify="space-between">
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

            {onClose && (
              <IconButton
                name="close"
                onClick={onClose}
              />
            )}
          </Stack>

          <Stack gap="md" full>
            {children}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}