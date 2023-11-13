import styles from './index.module.css';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean
  type?: HTMLButtonElement['type'];
  onClick?: () => void;
}

export function Button({ children, fullWidth, type = 'button', onClick }: ButtonProps) {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
    >
      {children}
    </button>
  )
}