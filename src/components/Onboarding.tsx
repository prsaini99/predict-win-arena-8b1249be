
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "What is Predict & Win?",
    description:
      "Predict ball-by-ball outcomes in cricket matches and winners in horse racing. It's your knowledge versus the odds!",
    image: "/placeholder.svg",
  },
  {
    title: "How to Win",
    description:
      "Predict outcomes, earn points, climb the leaderboard, and redeem exciting rewards. It's that simple!",
    image: "/placeholder.svg",
  },
  {
    title: "Start Playing",
    description:
      "It's free to play and based entirely on your knowledge. No entry fees, just rewards for your predictions!",
    image: "/placeholder.svg",
  },
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      navigate("/login");
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const skipToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="absolute top-4 right-4">
        {currentSlide !== slides.length - 1 && (
          <button
            className="text-sport-blue font-medium px-4 py-2"
            onClick={skipToLogin}
          >
            Skip
          </button>
        )}
      </div>

      {/* Slides */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div key={currentSlide} className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="bg-sport-light-gray w-64 h-64 rounded-full flex items-center justify-center">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mb-6">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentSlide === index ? "bg-sport-blue" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Button */}
      <div className="px-6 mb-10">
        <Button
          className={`w-full py-6 text-lg font-medium ${
            currentSlide === slides.length - 1
              ? "bg-sport-green hover:bg-sport-green/90"
              : "bg-sport-blue hover:bg-sport-blue/90"
          }`}
          onClick={nextSlide}
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
