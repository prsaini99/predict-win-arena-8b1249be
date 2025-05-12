
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

interface TriviaQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface DailyTriviaProps {
  isOpen: boolean;
  onClose: () => void;
}

const DailyTrivia = ({ isOpen, onClose }: DailyTriviaProps) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);

  // Mock trivia question
  const triviaQuestion: TriviaQuestion = {
    id: "trivia1",
    question: "Which player has scored the most centuries in international cricket?",
    options: [
      "Virat Kohli",
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Kumar Sangakkara"
    ],
    correctAnswer: 1, // Index of correct option (0-based)
  };

  const handleOptionSelect = (index: number) => {
    if (!isSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      toast.error("Please select an answer");
      return;
    }

    setIsSubmitted(true);

    // Calculate points
    if (selectedOption === triviaQuestion.correctAnswer) {
      setEarnedPoints(50);
      toast.success("Correct! You earned 50 points!");
    } else {
      setEarnedPoints(0);
      toast.error("Oops! That's not correct.");
    }
  };

  const handleContinue = () => {
    onClose();
    navigate("/home");
  };

  const getOptionClass = (index: number) => {
    if (!isSubmitted) {
      return selectedOption === index
        ? "bg-blue-50 border-sport-blue"
        : "border-gray-200 hover:bg-gray-50";
    }

    if (index === triviaQuestion.correctAnswer) {
      return "bg-green-50 border-sport-green";
    }

    if (selectedOption === index && index !== triviaQuestion.correctAnswer) {
      return "bg-red-50 border-red-400";
    }

    return "border-gray-200 opacity-70";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Daily Trivia</DialogTitle>
        </DialogHeader>

        <div className="py-2">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">{triviaQuestion.question}</h3>

            <div className="space-y-3 mt-4">
              {triviaQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${getOptionClass(
                    index
                  )}`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                        selectedOption === index
                          ? "border-sport-blue bg-sport-blue"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedOption === index && (
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      )}
                    </div>
                    <span>{option}</span>

                    {isSubmitted && index === triviaQuestion.correctAnswer && (
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-sport-green"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                    )}

                    {isSubmitted &&
                      selectedOption === index &&
                      index !== triviaQuestion.correctAnswer && (
                        <div className="ml-auto">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-red-500"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {!isSubmitted ? (
            <Button className="w-full submit-button" onClick={handleSubmit}>
              Submit Answer
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-700 mb-1">
                  {earnedPoints > 0 ? "You answered correctly!" : "Better luck tomorrow!"}
                </p>
                <p className="font-bold text-sport-blue text-xl">
                  {earnedPoints} Points Earned
                </p>
              </div>
              <Button className="w-full" onClick={handleContinue}>
                Continue
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DailyTrivia;
