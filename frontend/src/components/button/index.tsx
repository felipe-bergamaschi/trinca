import styles from './index.module.css';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean
}

export function Button({ children, fullWidth }: ButtonProps) {
  return (
    <button
      className={styles.button}
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
    >
      {children}
    </button>
  )
}