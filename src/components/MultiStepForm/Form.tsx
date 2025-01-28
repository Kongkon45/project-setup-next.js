"use client"
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import NavigationButtons from './NavigationButtons';
import ProgressSteps from './ProgressSteps';
import * as z from 'zod';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const FormSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email address'),

  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),

  phone: z.string().min(10, 'Phone number must be valid'),
  hobbies: z.string().optional(),

  profileImage: z.string().optional(), // This will hold base64 or URL string for image
});

type Inputs = z.infer<typeof FormSchema>;

export default function Form() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data); // Print the form data including the image as a string
    alert('Form submitted successfully!');
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-8 p-4 border rounded-lg">
      <h2 className="text-lg font-bold text-center mb-4">Step {step} of 4</h2>
      <ProgressSteps step={step} totalSteps={4} />
      {step === 1 && <Step1 register={register} errors={errors} />}
      {step === 2 && <Step2 register={register} errors={errors} />}
      {step === 3 && <Step3 register={register} errors={errors} />}
      {step === 4 && <Step4 register={register} setValue={setValue} errors={errors} />}
      
      {/* <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
        )}
        {step < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
      </div> */}
      <NavigationButtons step={step} totalSteps={4} nextStep={nextStep} prevStep={prevStep} />
    </form>
  );
}