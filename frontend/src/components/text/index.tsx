import React from 'react';

type TextComponentProps = {
  color?: 'primary' | 'secondary';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

export function Text({
  color = 'primary',
  variant = 'div',
  size,
  children
}: TextComponentProps) {
  function getFontSize(size: TextComponentProps['size']) {
    switch (size) {
      case 'sm':
        return '12px';
      case 'md':
        return '16px';
      case 'lg':
        return '22px';
      default:
        return '16px';
    }
  }

  const style = {
    color: color === 'primary' ? 'var(--text-primary)' : 'var(--text-secondary)',
    fontSize: size ? getFontSize(size) : undefined,
  };

  return React.createElement(variant, { style }, children);
};
