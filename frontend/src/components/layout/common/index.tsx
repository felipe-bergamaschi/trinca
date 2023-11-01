import styles from './index.module.css'

interface CommonLayoutProps {
  children: React.ReactNode

}

export function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <main className={styles.container}>
      <div>sidebar</div>

      <div>
        <div>header</div>

        <div>
          Body
          {children}
        </div>
      </div>
    </main>
  )
}