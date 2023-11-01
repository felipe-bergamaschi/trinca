import Image from 'next/image';
import styles from './index.module.css';
import { IconButton } from '@/components/iconButton';

export function Sidebar() {
  return (
    <div className={styles.container}>
      <Image
        src="/logo-black.svg"
        alt="Logo"
        width={48}
        height={48}
        priority
      />

      <div>
        <IconButton name="home" active />

        <IconButton name="event" />

        <IconButton name="logout" />
      </div>
    </div>
  )
}