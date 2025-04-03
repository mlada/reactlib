import React, { forwardRef } from 'react';
import './UiInput.css';
import { UseFormRegisterReturn, FieldValues } from 'react-hook-form';

type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

interface UiInputProps {
  value?: string;
  label?: string;
  placeholder?: string;
  type?: InputType;
  disabled?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  hint?: string;
  prefixIcon?: string;
  suffixIcon?: string;
  clearable?: boolean;
  id?: string;
  onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  required?: boolean;
}

export const UiInput = forwardRef<HTMLInputElement, UiInputProps>((props, ref) => {
  const {
    value = '',
    label = '',
    placeholder = '',
    type = 'text',
    disabled = false,
    invalid = false,
    errorMessage = '',
    hint = '',
    prefixIcon = '',
    suffixIcon = '',
    clearable = false,
    id = `input-${Math.random().toString(36).substring(2, 9)}`,
    onChange,
    onBlur,
    onFocus,
    className = '',
    name,
    required = false,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = React.useState(value);

  React.useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue, e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
  };

  const clearValue = () => {
    setInternalValue('');
    onChange?.('');
    if (ref && typeof ref === 'object' && ref.current) {
      ref.current.focus();
    }
  };

  const getIcon = (iconName: string): string => {
    const icons: Record<string, string> = {
      'person': '👤',
      'email': '✉️',
      'lock': '🔒',
      'search': '🔍',
      'info': 'ℹ️',
      'visibility': '👁️',
      'visibility-off': '🚫',
      'close': '×'
    };
    return icons[iconName] || iconName;
  };

  return (
    <div className={`input-container ${className} ${disabled ? 'disabled' : ''} ${invalid ? 'invalid' : ''}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className="input-wrapper">
        {prefixIcon && (
          <span className="prefix" dangerouslySetInnerHTML={{ __html: getIcon(prefixIcon) }} />
        )}

        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={internalValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          required={required}
          {...rest}
        />

        {suffixIcon && (
          <span className="suffix" dangerouslySetInnerHTML={{ __html: getIcon(suffixIcon) }} />
        )}

        {clearable && internalValue && !disabled && (
          <button
            className="clear-btn"
            onClick={clearValue}
            type="button"
            aria-label="Clear input"
          >
            ×
          </button>
        )}
      </div>

      {hint && !invalid && <div className="hint">{hint}</div>}
      {invalid && errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
});
