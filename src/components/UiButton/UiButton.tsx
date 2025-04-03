import React from 'react';
import './UiButton.css';

interface UiButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  
  /** What background color to use */
  backgroundColor?: string;
  
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Button contents
   * @required
   */
  label: string;
  
  /** Optional click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const UiButton: React.FC<UiButtonProps> = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  label,
  onClick,
}) => {
  const mode = primary ? 'ui-button--primary' : 'ui-button--secondary';
  const classes = ['ui-button', `ui-button--${size}`, mode].join(' ');

  return (
    <button
      type="button"
      className={classes}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};