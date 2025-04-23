import { Card, CardContent } from "@/components/ui/card";
import { axiosInstance } from "@/lib/axios";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    // Add a safety timeout - if we're stuck loading for more than 5 seconds, go to home
    const timer = setTimeout(() => {
      if (isLoaded && user) {
        console.log("Safety timeout triggered, redirecting to home");
        navigate("/");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoaded, user, navigate]);

  // Track how long we've been on this page
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Main sync effect
  useEffect(() => {
    const syncUser = async () => {
      // Only proceed if clerk is loaded, user exists, and we're not already processing
      if (!isLoaded || !user || isProcessing) return;

      setIsProcessing(true);

      try {
        const response = await axiosInstance.post("/auth/callback", {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl,
        });
        
        console.log("Auth callback successful:", response.data);
        navigate("/");
      } catch (error : any) {
        console.error("Error in auth callback:", error);
        
        // For network errors or server errors, show a retry button
        if (error.message === 'Network Error' || (error.response && error.response.status >= 500)) {
          // setError("Connection error. Please try again.");
        } else {
          // For other errors like 4xx, just redirect to home anyway
          // The user is authenticated with Clerk, so the app should still work
          console.log("Non-critical error, redirecting anyway");
          navigate("/");
        }
      } finally {
        setIsProcessing(false);
      }
    };

    syncUser();
  }, [isLoaded, user, navigate, isProcessing]);

  // Add a retry button if there's an error
  const handleRetry = () => {
    setError(null);
    setIsProcessing(false);
  };

  // Add a manual redirect button if we've been loading for too long
  const handleManualRedirect = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
        <CardContent className="flex flex-col items-center gap-4 pt-6 pb-6">
          {error ? (
            <>
              <h3 className="text-red-500 text-xl font-bold">Login Error</h3>
              <p className="text-zinc-400 text-sm">{error}</p>
              <button 
                onClick={handleRetry}
                className="mt-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded text-white"
              >
                Retry
              </button>
              <button 
                onClick={handleManualRedirect}
                className="mt-2 px-4 py-2 bg-zinc-600 hover:bg-zinc-700 rounded text-white"
              >
                Skip & Continue to App
              </button>
            </>
          ) : (
            <>
              <Loader className="size-6 text-emerald-500 animate-spin" />
              <h3 className="text-zinc-400 text-xl font-bold">Logging you in</h3>
              <p className="text-zinc-400 text-sm">Redirecting...</p>
              
              {loadingTime > 3 && (
                <button 
                  onClick={handleManualRedirect}
                  className="mt-4 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded text-zinc-300 text-sm"
                >
                  Taking too long? Click to continue
                </button>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCallbackPage;