import { Icon, IconProps } from '../icon';

import styles from './index.module.css';

interface IconButtonProps extends IconProps {
  onClick?: () => void;
  active?: boolean;
  variant?: 'sm' | 'md';
}

export function IconButton({ onClick, active, variant = 'md', ...props }: IconButtonProps) {
  function getSize() {
    switch (variant) {
      case 'sm':
        return 40;
      case 'md':
        return 48;
    }
  }

  function getRadius() {
    switch (variant) {
      case 'sm':
        return 12;
      case 'md':
        return 16;
    }
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.container} ${active ? styles.active : ''}`}
      style={{
        width: getSize(),
        height: getSize(),
        borderRadius: getRadius()
      }}
    >
      <Icon {...props} />
    </button>
  )
}