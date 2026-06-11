import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4 font-jakarta text-shimmer">404</h1>
        <p className="text-xl text-slate-400 mb-6">Oops! Page not found</p>
        <a href="/" className="px-6 py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white rounded-xl text-sm font-medium transition-all">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
