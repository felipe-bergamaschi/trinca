import styles from './index.module.css';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean
  type?: HTMLButtonElement['type'];
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, fullWidth, type = 'button', onClick, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      style={{ width: fullWidth ? '100%' : 'fit-content' }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}