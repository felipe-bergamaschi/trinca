import ModuleStyles from './index.module.css'

type StackSpacing = 'sm' | 'md' | 'lg' | 'none'

interface StackProps {
  children: React.ReactNode
  direction?: 'row' | 'column'
  gap?: StackSpacing
  padding?: StackSpacing
  full?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Stack({
  children,
  direction = 'column',
  gap = 'none',
  padding = 'none',
  full = false,
  className,
  style
}: StackProps) {
  function getSpacing(value: StackSpacing) {
    switch (value) {
      case 'sm':
        return 8
      case 'md':
        return 16
      case 'lg':
        return 24
      default:
        return 0
    }

  }

  return (
    <div
      className={`${ModuleStyles.stack} ${className || ''}`}
      style={{
        flex: full ? 1 : undefined,
        flexDirection: direction,
        gap: getSpacing(gap),
        padding: getSpacing(padding),
        ...style
      }}
    >
      {children}
    </div>
  )
}