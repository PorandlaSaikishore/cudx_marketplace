const steps = ["Login", "Upload Files", "Preview","Complete"];

const Stepper = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = currentStep > stepNumber;
        const isActive = currentStep === stepNumber;

        return (
          <div key={step} className="flex items-center w-full">
            {/* Step circle */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full font-medium
                ${
                  isCompleted
                    ? "bg-green-600 text-white"
                    : isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
            >
              {isCompleted ? "✓" : stepNumber}
            </div>

            {/* Step label */}
            <span
              className={`ml-2 text-sm font-medium
                ${isActive ? "text-blue-600" : "text-gray-600"}`}
            >
              {step}
            </span>

            {/* Connector */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-3
                  ${isCompleted ? "bg-green-600" : "bg-gray-300"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;