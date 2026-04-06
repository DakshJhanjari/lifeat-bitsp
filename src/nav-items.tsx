
import Index from "./pages/Index";
import HostelLifePage from "./pages/HostelLifePage";
import MessAndFoodPage from "./pages/MessAndFoodPage";
import AcademicOrientationPage from "./pages/AcademicOrientationPage";
import ClubsAndCampusLifePage from "./pages/ClubsAndCampusLifePage";
import HealthAndFitnessPage from "./pages/HealthAndFitnessPage";

// Hostel sub-pages
import HostelAllocationPage from "./pages/hostel/HostelAllocationPage";
import HostelFacilitiesPage from "./pages/hostel/HostelFacilitiesPage";

// Mess sub-pages
import MessSystemPage from "./pages/mess/MessSystemPage";
import RediCulturePage from "./pages/mess/RediCulturePage";

// Academic sub-pages
import ERPGuidePage from "./pages/academic/ERPGuidePage";
import TimetableRegistrationPage from "./pages/academic/TimetableRegistrationPage";

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
    to: "/hostel-allocation",
    page: <HostelAllocationPage />,
  },
  {
    to: "/hostel-facilities",
    page: <HostelFacilitiesPage />,
  },
  {
    to: "/mess-and-food",
    page: <MessAndFoodPage />,
  },
  {
    to: "/mess-system",
    page: <MessSystemPage />,
  },
  {
    to: "/redi-culture",
    page: <RediCulturePage />,
  },
  {
    to: "/academic-orientation",
    page: <AcademicOrientationPage />,
  },
  {
    to: "/erp-guide",
    page: <ERPGuidePage />,
  },
  {
    to: "/timetable-registration",
    page: <TimetableRegistrationPage />,
  },
  {
    to: "/clubs-and-campus-life",
    page: <ClubsAndCampusLifePage />,
  },
  {
    to: "/health-and-fitness",
    page: <HealthAndFitnessPage />,
  },
];
