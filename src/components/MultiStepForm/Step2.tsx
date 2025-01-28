"use client"
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Inputs } from './Form';

type Step2Props = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
};

const Step2: React.FC<Step2Props> = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="country" className="block text-sm font-medium">Country</label>
      <input
        {...register('country')}
        id="country"
        className="block w-full rounded border-gray-300 border-2"
        type="text"
      />
      {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}

      <label htmlFor="city" className="block text-sm font-medium mt-4">City</label>
      <input
        {...register('city')}
        id="city"
        className="block w-full rounded border-gray-300 border-2"
        type="text"
      />
      {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
    </div>
  );
};

export default Step2;
