"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
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

const initialGigCategories = [
  {
    title: "Cleaning",
    gigs: [
      { title: "Cleaning apartments", image: "/cleaning-apartments.jpg", isFavorite: false },
      { title: "Washing windows", image: "/washing-windows.jpg", isFavorite: false },
      { title: "Vacuuming apartments", image: "/vacuuming-apartments.jpg", isFavorite: false },
    ],
  },
  {
    title: "Gardening",
    gigs: [
      { title: "Backyard garden Design", image: "/garden-design.jpg", isFavorite: false },
      { title: "Flowers Watering", image: "/flowers-watering.jpg", isFavorite: false },
      { title: "Trees Cutting", image: "/trees-cutting.jpg", isFavorite: false },
    ],
  },
  {
    title: "Mounting",
    gigs: [
      { title: "Window Installation", image: "/window-installation.jpg", isFavorite: false },
      { title: "TV Mounting", image: "/tv-mounting2.jpg", isFavorite: false },
      { title: "Moving boxes", image: "/moving-boxes.jpg", isFavorite: false },
    ],
  },
];

export default function HomeMobile() {
  const router = useRouter();
  const [gigCategories, setGigCategories] = useState(initialGigCategories);

  const handleCategoryClick = (categoryTitle) => {
    if (categoryTitle === "Mounting") {
      router.push("/gigs/tv-mounting");
    }
  };

  const handleFavoriteToggle = (categoryIndex, gigIndex) => {
    setGigCategories((prevGigCategories) => {
      const newGigCategories = [...prevGigCategories];
      const category = { ...newGigCategories[categoryIndex] };
      const gigs = [...category.gigs];
      gigs[gigIndex] = { ...gigs[gigIndex], isFavorite: !gigs[gigIndex].isFavorite };
      category.gigs = gigs;
      newGigCategories[categoryIndex] = category;
      return newGigCategories;
    });
  };

  return (
    <div className="bg-[#F8FAFC] flex flex-col pb-20 pt-16">
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
        {gigCategories.map((cat, categoryIndex) => (
          <GigCategorySection
            key={categoryIndex}
            title={cat.title}
            gigs={cat.gigs}
            onClick={() => handleCategoryClick(cat.title)}
            onFavorite={(gigIndex) => handleFavoriteToggle(categoryIndex, gigIndex)}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <BottomNav />
      </div>
    </div>
  );
}
