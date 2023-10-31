interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean
}

import styles from './index.module.css';

export function Button({ children, fullWidth }: ButtonProps) {
  return (
    <button
      className={styles.button}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      {children}
    </button>
  )
}