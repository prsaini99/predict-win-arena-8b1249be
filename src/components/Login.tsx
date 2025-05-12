import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      toast.success("OTP sent to your phone");
    }, 1500);
  };

  const handleVerifyOTP = () => {
    if (!otp || otp.length < 4) {
      toast.error("Please enter a valid OTP");
      return;
    }

    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      // Ensure we use the correct path and replace the history
      navigate("/profile-setup", { replace: true });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Welcome</h2>
            <p className="text-gray-500 mt-2">
              {otpSent
                ? "Enter the OTP sent to your phone"
                : "Login or Sign up to continue"}
            </p>
          </div>

          {!otpSent ? (
            <div className="space-y-6 mt-8">
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="flex">
                  <div className="bg-gray-100 flex items-center justify-center px-4 border border-gray-300 rounded-l-md">
                    <span className="text-gray-600">+91</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="rounded-l-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(!!checked)}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-500">
                    I agree to the{" "}
                    <a href="#" className="text-sport-blue">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-sport-blue">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <Button
                className="bg-sport-green hover:bg-sport-green/90 w-full py-6"
                onClick={handleSendOTP}
                disabled={isLoading}
              >
                {isLoading ? "Sending OTP..." : "Continue"}
              </Button>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white flex items-center justify-center hover:bg-gray-50">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M21.8 12.2C21.8 11.4 21.7 10.8 21.6 10.1H12V13.7H17.5C17.3 14.9 16.6 15.9 15.5 16.5V18.9H18.6C20.3 17.3 21.8 15 21.8 12.2Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 22C14.6 22 16.8 21.1 18.6 18.9L15.5 16.5C14.6 17.1 13.5 17.5 12 17.5C9.3 17.5 7 15.7 6.1 13.2H2.9V15.7C4.7 19.3 8.1 22 12 22Z"
                        fill="#34A853"
                      />
                      <path
                        d="M6.1 13.2C5.9 12.6 5.7 11.9 5.7 11.2C5.7 10.5 5.9 9.8 6.1 9.2V6.7H2.9C2.2 8 1.8 9.6 1.8 11.2C1.8 12.8 2.2 14.4 2.9 15.7L6.1 13.2Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.9C13.5 5.9 14.8 6.4 15.9 7.4L18.6 4.7C16.8 3 14.6 2 12 2C8.1 2 4.7 4.7 2.9 8.3L6.1 10.8C7 8.3 9.3 5.9 12 5.9Z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </button>
                  <button className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white flex items-center justify-center hover:bg-gray-50">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <rect width="24" height="24" rx="12" fill="#1877F2" />
                      <path
                        d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.8043 14.3043 7.875 15.8086 7.875H17.3438V4.922C17.3438 4.922 15.9707 4.6875 14.6602 4.6875C11.9238 4.6875 10.125 6.3516 10.125 9.3516V12H7.07812V15.4688H10.125V23.8602C10.7367 23.9531 11.3613 24 12 24C12.6387 24 13.2633 23.9531 13.875 23.8602V15.4688H16.6711Z"
                        fill="white"
                      />
                    </svg>
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 mt-8">
              <div className="space-y-2">
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter OTP
                </label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter the 4-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="text-center text-lg tracking-widest"
                  maxLength={4}
                />
              </div>

              <Button
                className="bg-sport-green hover:bg-sport-green/90 w-full py-6"
                onClick={handleVerifyOTP}
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  className="text-sport-blue text-sm"
                  onClick={() => setOtpSent(false)}
                >
                  Change Phone Number
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
