import React from 'react';

type SpacingMargin = 'sm' | 'md' | 'lg';

type TextComponentProps = {
  color?: 'primary' | 'secondary';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  mt?: SpacingMargin;
  mb?: SpacingMargin;
  ml?: SpacingMargin;
  mr?: SpacingMargin;
};

export function Text({
  color = 'primary',
  variant = 'div',
  size,
  children,
  mt,
  mb,
  ml,
  mr
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

  function getMargin(margin: SpacingMargin | undefined) {
    switch (margin) {
      case 'sm':
        return '4px';
      case 'md':
        return '8px';
      case 'lg':
        return '16px';
      default:
        return '0';
    }
  }

  const style = {
    color: color === 'primary' ? 'var(--text-primary)' : 'var(--text-secondary)',
    fontSize: size ? getFontSize(size) : undefined,
    marginTop: getMargin(mt),
    marginBottom: getMargin(mb),
    marginLeft: getMargin(ml),
    marginRight: getMargin(mr)
  };

  return React.createElement(variant, { style }, children);
};
