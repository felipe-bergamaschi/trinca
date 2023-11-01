import { Header, HeaderProps } from './header'
import { Sidebar } from './sidebar'

import styles from './index.module.css'

interface CommonLayoutProps extends HeaderProps {
  children: React.ReactNode
}

export function CommonLayout({ children, ...props }: CommonLayoutProps) {
  return (
    <main className={styles.container}>
      <Sidebar />

      <div className={styles.content}>
        <Header actions={props.actions} />

        <div className={styles.body}>
          {children}
        </div>
      </div>
    </main>
  )
}