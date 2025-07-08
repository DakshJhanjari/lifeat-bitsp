
import Index from "./pages/Index";
import DakshStory from "./pages/DakshStory";
import HostelLifePage from "./pages/HostelLifePage";
import MessAndFoodPage from "./pages/MessAndFoodPage";
import AcademicOrientationPage from "./pages/AcademicOrientationPage";
import ClubsAndCampusLifePage from "./pages/ClubsAndCampusLifePage";
import HealthAndFitnessPage from "./pages/HealthAndFitnessPage";

export const navItems = [
  {
    to: "/",
    page: <Index />,
  },
  {
    to: "/hostel-life",
    page: <HostelLifePage />,
  },
  {
    to: "/mess-and-food",
    page: <MessAndFoodPage />,
  },
  {
    to: "/academic-orientation",
    page: <AcademicOrientationPage />,
  },
  {
    to: "/clubs-and-campus-life",
    page: <ClubsAndCampusLifePage />,
  },
  {
    to: "/health-and-fitness",
    page: <HealthAndFitnessPage />,
  },
  {
    to: "/daksh-story",
    page: <DakshStory />,
  },
];
