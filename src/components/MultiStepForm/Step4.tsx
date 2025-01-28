// "use client"
// import React, { useState } from 'react';
// import ImagePreview from './ImagePreview';
// import { Inputs } from './Form';
// import { UseFormRegister, FieldErrors } from 'react-hook-form';

// type Step4Props = {
//     register: UseFormRegister<Inputs>;
//     errors: FieldErrors<Inputs>;
//     setValue: any;
//   };

// const Step4: React.FC<Step4Props> = ({ register, setValue, errors }) => {
//   const [imagePreview, setImagePreview] = useState<string | null>(null);

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64String = reader.result as string;
//         setValue('profileImage', base64String); // Set base64 string to form value
//         setImagePreview(base64String); // Set image preview
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="profileImage" className="block text-sm font-medium">Upload Profile Image</label>
//       <input
//         {...register('profileImage')}
//         id="profileImage"
//         className="block w-full rounded border-gray-300 border-2"
//         type="file"
//         onChange={handleImageChange}
//       />
//       {imagePreview && <ImagePreview src={imagePreview} />}
//       {errors.profileImage && <p className="text-sm text-red-500">{errors.profileImage.message}</p>}
//     </div>
//   );
// };

// export default Step4;

import { UseFormRegister, UseFormSetValue, FieldErrors } from 'react-hook-form';

// Define Inputs interface according to your form fields
type Inputs = {
  profileImage: string; // Add other form fields as required
};

type Step4Props = {
  register: UseFormRegister<Inputs>;
  setValue: UseFormSetValue<Inputs>;  // Correctly typing setValue
  errors: FieldErrors<Inputs>;
};

const Step4: React.FC<Step4Props> = ({ register, setValue, errors }) => {
  return (
    <div>
      {/* Profile Image Field */}
      <input
        {...register("profileImage")}
        onChange={(e) => setValue("profileImage", e.target.value)} // Correctly set the value
      />
      {errors.profileImage && <p>{errors.profileImage.message}</p>}
    </div>
  );
};

export default Step4;

