import { IconButton } from '@/components/iconButton'
import styles from './index.module.css'
import Image from 'next/image'

export interface HeaderProps {
  actions?: React.ReactNode
}

export function Header({ actions }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {actions}
      </div>

      <div className={styles.content}>
        <div className={styles.icons}>
          <IconButton name='settings' />
          <IconButton name='notification' />
        </div>

        <Image
          src="/avatar.svg"
          alt="Logo"
          width={48}
          height={48}
          style={{
            borderRadius: 'var(--radius-lg)',
          }}
        />
      </div>
    </div>
  )
}