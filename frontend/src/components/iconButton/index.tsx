import { Icon, IconProps } from '../icon';

import styles from './index.module.css';

interface IconButtonProps extends IconProps {
  onClick?: () => void;
  active?: boolean;
}

export function IconButton({ onClick, active, ...props }: IconButtonProps) {
  return (
    <button
      className={`${styles.container} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      <Icon {...props} />
    </button>
  )
}