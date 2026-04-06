
import { Button } from "@/components/ui/button";

const MentorConnectButton = () => {
  return (
    <div className="mb-8 sm:mb-12 flex justify-center">
      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/20 hover-lift text-base sm:text-lg">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScj6gDv5GWpG2-UJKa7XJo21FBMvQvGq9WttslX7JPf6YjXlA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
          Connect with a Student Mentor 🤝
        </a>
      </Button>
    </div>
  );
};

export default MentorConnectButton;
