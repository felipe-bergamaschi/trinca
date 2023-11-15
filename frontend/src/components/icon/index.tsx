import { HomeIcon } from '../../assets/svg/home'
import { LogoutIcon } from '../../assets/svg/logout'
import { EventIcon } from '../../assets/svg/event'
import { NotificationIcon } from '../../assets/svg/notification'
import { SettingsIcon } from '../../assets/svg/settings'
import { AddIcon } from '../../assets/svg/add'
import { GroupIcon } from '../../assets/svg/group'
import { PaidIcon } from '../../assets/svg/paid'
import { PlaceIcon } from '../../assets/svg/place'
import { DeleteIcon } from '../../assets/svg/delete'
import { InfoIcon } from '../../assets/svg/info'

type IconName = 'home' | 'logout' | 'event' | 'notification' | 'settings' | 'add' | 'group' | 'paid' | 'place' | 'delete' | 'info';

export interface IconProps {
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
      case 'notification':
        return <NotificationIcon />
      case 'settings':
        return <SettingsIcon />
      case 'add':
        return <AddIcon />
      case 'group':
        return <GroupIcon />
      case 'paid':
        return <PaidIcon />
      case 'place':
        return <PlaceIcon />
      case 'delete':
        return <DeleteIcon />
      case 'info':
        return <InfoIcon />
    }
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" width={size} fill={color} >
      {renderIcon()}
    </svg>
  )
}