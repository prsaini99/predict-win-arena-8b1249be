
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-sport-blue mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-2">Page Not Found</p>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild variant="default" className="px-6">
            <Link to="/home">Go to Home</Link>
          </Button>
          <Button 
            variant="outline" 
            className="px-6"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
