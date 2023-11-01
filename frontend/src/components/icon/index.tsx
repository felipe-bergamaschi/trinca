import { HomeIcon } from '../../assets/svg/home'
import { LogoutIcon } from '../../assets/svg/logout'
import { EventIcon } from '../../assets/svg/event'

type IconName = 'home' | 'logout' | 'event';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 24, color = '#000' }: IconProps) {
  function renderIcon() {
    switch (name) {
      case 'home':
        return <HomeIcon />
      case 'logout':
        return <LogoutIcon />
      case 'event':
        return <EventIcon />
    }
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color} >
      {renderIcon()}
    </svg>
  )
}