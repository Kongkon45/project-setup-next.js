"use client"
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Inputs } from './Form';

type Step1Props = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
};

const Step1: React.FC<Step1Props> = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
      <input
        {...register('firstName')}
        id="firstName"
        className="block w-full rounded border-gray-300 border-2"
        type="text"
      />
      {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}

      <label htmlFor="lastName" className="block text-sm font-medium mt-4">Last Name</label>
      <input
        {...register('lastName')}
        id="lastName"
        className="block w-full rounded border-gray-300 border-2"
        type="text"
      />
      {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}

      <label htmlFor="email" className="block text-sm font-medium mt-4">Email</label>
      <input
        {...register('email')}
        id="email"
        className="block w-full rounded border-gray-300 border-2"
        type="email"
      />
      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
    </div>
  );
};

export default Step1;
