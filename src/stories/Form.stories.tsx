import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { UiForm } from '../components/UiForm/UiForm';
import { UiInput } from '../components/UiInput/UiInput';

const meta: Meta<typeof UiForm> = {
  title: 'Components/UiForm',
  component: UiForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
    onCancel: { action: 'cancelled' }
  },
};

export default meta;

type Story = StoryObj<typeof UiForm>;

export const LoginForm: Story = {
  render: (args) => {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
      defaultValues: {
        email: '',
        password: ''
      }
    });

    return (
      <UiForm {...args} onSubmit={handleSubmit(args.onSubmit)}>
        <UiInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          invalid={!!errors.email}
          errorMessage={errors.email?.message}
          value={watch('email')}
          onChange={(value) => setValue('email', value)}
          name={register('email').name}
          ref={register('email').ref}
        />
        
        <UiInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          invalid={!!errors.password}
          errorMessage={errors.password?.message}
          value={watch('password')}
          onChange={(value) => setValue('password', value)}
          name={register('password').name}
          ref={register('password').ref}
        />
      </UiForm>
    );
  },
  args: {
    formTitle: 'Login',
    submitButtonText: 'Sign In'
  }
};

export const RegistrationForm: Story = {
  render: (args) => {
    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
      defaultValues: {
        name: '',
        email: '',
        password: '',
        terms: false
      }
    });

    return (
      <UiForm {...args} onSubmit={handleSubmit(args.onSubmit)}>
        <UiInput
          label="Full Name"
          placeholder="Enter your full name"
          value={watch('name')}
          onChange={(value) => setValue('name', value)}
          name={register('name').name}
          ref={register('name').ref}
        />
        
        <UiInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          value={watch('email')}
          onChange={(value) => setValue('email', value)}
          name={register('email').name}
          ref={register('email').ref}
        />
        
        <UiInput
          label="Password"
          placeholder="Create a password"
          type="password"
          value={watch('password')}
          onChange={(value) => setValue('password', value)}
          name={register('password').name}
          ref={register('password').ref}
        />
        
      </UiForm>
    );
  },
  args: {
    formTitle: 'Create Account',
    submitButtonText: 'Register',
    cancelButtonText: 'Cancel'
  }
};