interface ButtonProps {
  children: React.ReactNode
}

import styles from './index.module.css';

export function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}