"use client"
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Inputs } from './Form';

type Step3Props = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
};

const Step3: React.FC<Step3Props> = ({ register, errors }) => {
  return (
    <div>
      <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
      <input
        {...register('phone')}
        id="phone"
        className="block w-full rounded border-gray-300 border-2"
        type="tel"
      />
      {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}

      <label htmlFor="hobbies" className="block text-sm font-medium mt-4">Hobbies</label>
      <textarea
        {...register('hobbies')}
        id="hobbies"
        className="block w-full rounded border-gray-300 border-2"
        rows={3}
      ></textarea>
      {errors.hobbies && <p className="text-sm text-red-500">{errors.hobbies.message}</p>}
    </div>
  );
};

export default Step3;

