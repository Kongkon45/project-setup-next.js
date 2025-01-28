type NavigationButtonsProps = {
    step: number;
    totalSteps: number;
    nextStep: () => void;
    prevStep: () => void;
  };
  
  export default function NavigationButtons({ step, totalSteps, nextStep, prevStep }: NavigationButtonsProps) {
    return (
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={prevStep}
          disabled={step === 1}
        >
          Previous
        </button>
        {step < totalSteps ? (
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={nextStep}
          >
            Next
          </button>
        ) : (
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
            Submit
          </button>
        )}
      </div>
    );
  }
  