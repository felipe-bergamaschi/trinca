import Image from 'next/image'
import styles from './index.module.css'

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image
          src="/logo-white.svg"
          alt="Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      {children}
    </main>
  )
}