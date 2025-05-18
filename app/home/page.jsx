import TopNav from "@/components/TopNav";
import RoleTabs from "@/components/RoleTabs";
import ActivityCard from "@/components/ActivityCard";
import GigCategorySection from "@/components/GigCategorySection";
import SearchBar from "@/components/SearchBar";
import BottomNav from "@/components/BottomNav";
import TuneIcon from "@mui/icons-material/Tune";

const activities = [
  {
    title: "TV Mounting",
    assigner: "Erwin Bach",
    price: "$150",
    date: "Feb 24, 2025",
    location: "Metrotown",
    acceptedDate: "Feb 20, 2025",
    image: "/tv-mounting.jpg",
    status: "Upcoming",
  },
  {
    title: "Meal planning & organizing",
    assigner: "Erwin Bach",
    price: "$50",
    date: "Feb 23, 2025",
    location: "Vancouver",
    acceptedDate: "Feb 10, 2025",
    image: "/meal-planning.jpg",
    status: "Upcoming",
  },
];

const gigCategories = [
  {
    title: "Cleaning",
    gigs: [
      { title: "Cleaning apartments", image: "/cleaning-apartments.jpg" },
      { title: "Washing windows", image: "/washing-windows.jpg" },
      { title: "Vacuuming apartments", image: "/vacuuming-apartments.jpg" },
    ],
  },
  {
    title: "Gardening",
    gigs: [
      { title: "Backyard garden Design", image: "/garden-design.jpg" },
      { title: "Flowers Watering", image: "/flowers-watering.jpg" },
      { title: "Trees Cutting", image: "/trees-cutting.jpg" },
    ],
  },
  {
    title: "Mounting",
    gigs: [
      { title: "Window Installation", image: "/window-installation.jpg" },
      { title: "TV Mounting", image: "/tv-mounting2.jpg" },
      { title: "Moving boxes", image: "/moving-boxes.jpg" },
    ],
  },
];

export default function HomeMobile() {
  return (
    <div className="bg-[#F8FAFC] flex flex-col pb-20">
      <TopNav />
      <RoleTabs />
      <div className="px-4">
        <div className="flex items-center justify-between mt-2 mb-1">
          <span className="text-xs text-gray-500">Most Recent</span>
        </div>
        <h2 className="text-xl font-bold text-[#003366] mb-2">My Activity</h2>
        {activities.map((a, i) => (
          <ActivityCard key={i} {...a} />
        ))}
        <div className="flex justify-end mb-4">
          <button className="text-sm text-black">See more...</button>
        </div>
      </div>
      <div className="px-4 mt-2">
        <h2 className="text-xl font-bold text-[#003366] mb-2">Discover Gigs</h2>
        <div className="flex items-center gap-2 mb-2">
          <SearchBar className="flex-1" />
          <button className="p-2 bg-gray-200 rounded">
            <TuneIcon className="text-gray-600" />
          </button>
        </div>
        {gigCategories.map((cat, i) => (
          <GigCategorySection key={i} title={cat.title} gigs={cat.gigs} />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <BottomNav />
      </div>
    </div>
  );
}
