import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import './UiForm.css';
import { UiButton } from '../UiButton/UiButton';

interface UiFormProps {
  formTitle?: string;
  submitButtonText?: string;
  cancelButtonText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onSubmit: SubmitHandler<any>;
  onCancel?: () => void;
  defaultValues?: any;
  children?: React.ReactNode;
}

export const UiForm: React.FC<UiFormProps> = ({
  formTitle = '',
  submitButtonText = 'Submit',
  cancelButtonText = '',
  isLoading = false,
  isDisabled = false,
  onSubmit,
  onCancel,
  defaultValues = {},
  children
}) => {
  const methods = useForm({ defaultValues });

  const handleSubmit = methods.handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="ui-form">
        {formTitle && <h2>{formTitle}</h2>}

        <div className="form-content">
          {children}
        </div>

        <div className="form-actions">
          <UiButton
            label={isLoading ? 'Loading...' : submitButtonText}
          >
          </UiButton>

          {cancelButtonText && (
            <UiButton
              onClick={onCancel}
              label={cancelButtonText}
            >
              
            </UiButton>
          )}
        </div>
      </form>
    </FormProvider>
  );
};