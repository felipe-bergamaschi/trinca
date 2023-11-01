import { Header, HeaderProps } from './header'
import { Sidebar } from './sidebar'

import styles from './index.module.css'

interface CommonLayoutProps extends HeaderProps {
  children: React.ReactNode
}

export function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <main className={styles.container}>
      <Sidebar />

      <div className={styles.content}>
        <Header />

        <div className={styles.body}>
          Body
          {children}
        </div>
      </div>
    </main>
  )
}