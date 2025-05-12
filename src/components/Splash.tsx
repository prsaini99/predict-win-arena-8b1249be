
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      navigate("/onboarding");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-gradient-to-b from-sport-blue to-sport-dark-blue min-h-screen flex flex-col items-center justify-center text-white">
      <div className="animate-scale-in">
        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center mb-8">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="text-sport-blue"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8L12 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12L15 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-3 text-center">Predict & Win</h1>
        <p className="text-center text-gray-200">
          Predict Ball-by-Ball. Win Real Rewards.
        </p>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="animate-pulse-sport">
          <div className="w-2 h-2 bg-white rounded-full mx-1 inline-block"></div>
          <div className="w-2 h-2 bg-white rounded-full mx-1 inline-block"></div>
          <div className="w-2 h-2 bg-white rounded-full mx-1 inline-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
