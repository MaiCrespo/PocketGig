"use client";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SeekerCard from "@/components/SeekerCard";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TuneIcon from "@mui/icons-material/Tune";
import { mockSeekerData } from "./mockData";
import { useRouter } from "next/navigation";
import Tabs from "@/components/Tabs";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-sm mx-auto">
          <Header />
          <Tabs />
        </div>
      </div>

      {/* My Activity Section */}
      <section className="p-4 mt-24">
        <h2 className="text-lg font-bold mb-2 text-gray-800">My Activity</h2>
        <p className="text-sm text-gray-500 mb-4">Most Recent</p>
        <div className="flex flex-col items-center text-center text-gray-500">
          <img
            src="https://via.placeholder.com/150"
            alt="No Activity"
            className="w-24 h-24 mb-2"
          />
          <p className="text-sm">No Upcoming Gigs for today</p>
        </div>
      </section>

      {/* Discover Seeker Section */}
      <section className="p-4 flex-grow overflow-hidden">
        {/* Discover Seeker Header */}
        <div className="">
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            Discover Seeker
          </h2>
          <div className="flex items-center gap-2">
            <SearchBar />
            <button className="p-2 bg-gray-200 rounded">
              <TuneIcon className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Section */}
        <div className="space-y-4 mt-4 overflow-y-auto">
          {mockSeekerData.map((seeker) => {
            return (
              <SeekerCard
                key={seeker.name}
                name={seeker.name}
                rating={seeker.rating}
                distance={seeker.distance}
                imageSrc="https://picsum.photos/200"
                description={seeker.description}
              />
            );
          })}
        </div>
        <button
          onClick={() => router.push("/gig-posting")}
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-lg w-70 h-10 z-10 cursor-pointer"
        >
          Create Gig
        </button>
      </section>

      <BottomNav />
    </>
  );
}
