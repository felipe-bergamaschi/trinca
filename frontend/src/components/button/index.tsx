import styles from './index.module.css';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean
  type?: HTMLButtonElement['type'];
}

export function Button({ children, fullWidth, type = 'button' }: ButtonProps) {
  return (
    <button
      type={type}
      className={styles.button}
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
    >
      {children}
    </button>
  )
}