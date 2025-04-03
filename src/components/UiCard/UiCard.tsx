import React, { ReactNode } from 'react';
import './UiCard.css';

interface UiCardProps {
  header?: string;
  icon?: string;
  imageUrl?: string;
  imageAlt?: string;
  hoverable?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
}

export const UiCard: React.FC<UiCardProps> = ({
  header,
  icon,
  imageUrl,
  imageAlt,
  hoverable = false,
  children,
  actions,
}) => {
  const hasActions = !!actions;

  return (
    <div className={`ui-card ${hoverable ? 'hoverable' : ''}`}>
      {(header || icon) && (
        <div className="card-header">
          {icon && (
            <span className="header-icon">
              <img src={icon} alt={header || 'Card icon'} />
            </span>
          )}
          {header && <h3>{header}</h3>}
        </div>
      )}

      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={imageAlt || 'Card image'} />
        </div>
      )}

      <div className="card-content">{children}</div>

      {hasActions && <div className="card-actions">{actions}</div>}
    </div>
  );
};