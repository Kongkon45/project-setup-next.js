type ProgressStepsProps = {
    step: number;
    totalSteps: number;
  };
  
  export default function ProgressSteps({ step, totalSteps }: ProgressStepsProps) {
    return (
      <div className="flex justify-between mb-6">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`h-2 w-full mx-1 rounded ${
              index < step ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  }
  