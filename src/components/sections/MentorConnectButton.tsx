
import { Button } from "@/components/ui/button";

const MentorConnectButton = () => {
  return (
    <div className="mb-8 sm:mb-12">
      <Button asChild size="lg" className="bg-gradient-vibrant hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg hover-lift text-base sm:text-xl">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
          Connect with a Student Mentor 🤝
        </a>
      </Button>
    </div>
  );
};

export default MentorConnectButton;
