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
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </div>

      {children}
    </main>
  )
}