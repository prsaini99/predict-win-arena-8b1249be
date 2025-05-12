
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PredictionOption {
  value: string;
  label: string;
  probability: number;
}

const predictionOptions: PredictionOption[] = [
  { value: "dot", label: "Dot", probability: 35 },
  { value: "1", label: "1", probability: 25 },
  { value: "2", label: "2", probability: 10 },
  { value: "3", label: "3", probability: 5 },
  { value: "4", label: "4", probability: 12 },
  { value: "6", label: "6", probability: 8 },
  { value: "wicket", label: "Wicket", probability: 3 },
  { value: "extra", label: "Extra", probability: 2 },
];

const CricketPrediction = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isResultShown, setIsResultShown] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [timer, setTimer] = useState(10);

  const handlePrediction = (value: string) => {
    if (isSubmitted) return;
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      toast.error("Please select a prediction first");
      return;
    }

    setIsSubmitted(true);
    toast.success("Prediction submitted!");

    // Simulate a result after 3 seconds
    setTimeout(() => {
      const resultIndex = Math.floor(Math.random() * predictionOptions.length);
      const outcome = predictionOptions[resultIndex].value;
      setResult(outcome);
      setIsResultShown(true);

      if (outcome === selectedOption) {
        toast.success("Correct Prediction! +10 points");
      } else {
        toast.error("Wrong Prediction! Try again next ball");
      }

      // Reset for next prediction after 3 more seconds
      setTimeout(() => {
        setSelectedOption(null);
        setIsSubmitted(false);
        setIsResultShown(false);
        setResult(null);
        setTimer(10);
      }, 3000);
    }, 3000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Make Your Prediction</h2>
          <div className="bg-sport-blue text-white px-2 py-1 rounded text-sm">
            {isSubmitted ? "Waiting..." : `${timer}s`}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className={`bg-sport-blue h-1.5 rounded-full ${
              isSubmitted ? "animate-pulse-sport" : ""
            }`}
            style={{
              width: isSubmitted ? "100%" : `${(timer / 10) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-center">
          What will happen on the next ball?
        </h3>

        {isResultShown && (
          <div
            className={`mb-4 p-3 rounded-md text-center ${
              result === selectedOption
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            <p className="font-bold">
              {result === selectedOption
                ? "Correct Prediction! +10 points"
                : "Wrong Prediction!"}
            </p>
            <p>
              The result was:{" "}
              <span className="font-bold">
                {predictionOptions.find((opt) => opt.value === result)?.label}
              </span>
            </p>
          </div>
        )}

        <div className="grid grid-cols-4 gap-2">
          {predictionOptions.map((option) => (
            <button
              key={option.value}
              className={`p-3 rounded-md border-2 transition-all ${
                selectedOption === option.value
                  ? "border-sport-blue bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              } ${isSubmitted ? "opacity-60" : ""}`}
              onClick={() => handlePrediction(option.value)}
              disabled={isSubmitted}
            >
              <div className="text-center">
                <p className="font-bold">{option.label}</p>
                <p className="text-xs text-gray-500">{option.probability}%</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Button
        className="w-full bg-sport-green hover:bg-sport-green/90"
        onClick={handleSubmit}
        disabled={!selectedOption || isSubmitted}
      >
        {isSubmitted ? "Prediction Locked" : "Submit Prediction"}
      </Button>
    </div>
  );
};

export default CricketPrediction;
