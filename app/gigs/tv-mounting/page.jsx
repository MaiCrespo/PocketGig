"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GigListHeader from "@/components/GigListHeader";
import GigCard from "@/components/GigCard";
import BottomNav from "@/components/BottomNav";
import ApplyConfirmationModal from "@/components/ApplyConfirmationModal";
import SuccessNotification from "@/components/SuccessNotification";

const gigs = [
  {
    title: "TV Mounting",
    user: "Nan Roberts",
    rating: 5.0,
    price: "$150",
    dueDate: "March 23",
    distance: "1.2 km",
    description: `I'm looking for a reliable and skilled person to help me mount a TV on the wall at my place. The TV is 55 inches and I have the mounting kit ready.`,
    image: "/tv-mounting.jpg",
  },
  {
    title: "TV Mounting",
    user: "Nan Roberts",
    rating: 4.9,
    price: "$130",
    dueDate: "March 23",
    distance: "1.2 km",
    description: `I'm looking for a reliable and skilled person to help me mount a TV on the wall at my place. The TV is 55 inches and I have the mounting kit ready.`,
    image: "/tv-mounting5.jpg",
  },
  {
    title: "TV Mounting",
    user: "Dave Li",
    rating: 4.8,
    price: "$95",
    dueDate: "June 28",
    distance: "1.2 km",
    description: `I'm looking for a reliable and skilled person to help me mount a TV on the wall at my place. The TV is 55 inches and I have the mounting kit ready.`,
    image: "/tv-mounting3.jpg",
  },
  {
    title: "TV Mounting",
    user: "Rick Morty",
    rating: 4.7,
    price: "$100",
    dueDate: "March 16",
    distance: "1.2 km",
    description: `I'm looking for a reliable and skilled person to help me mount a TV on the wall at my place. The TV is 55 inches and I have the mounting kit ready.`,
    image: "/tv-mounting4.jpg",
  },
];

export default function TVMountingListPage() {
  const [expandedIdx, setExpandedIdx] = useState(0);
  const [favorites, setFavorites] = useState(Array(gigs.length).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const router = useRouter();

  const handleFavorite = (idx) => {
    setFavorites((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmApply = () => {
    setIsModalOpen(false);
    setIsNotificationOpen(true);
  };

  const handleCancelApply = () => {
    setIsModalOpen(false);
  };

  const handleNotificationClose = () => {
    setIsNotificationOpen(false);
  };

  return (
    <div className="bg-[#F8FAFC] flex flex-col pb-20 pt-16">
      <GigListHeader title="TV Mounting" onBack={() => router.back()} />
      <div className="px-3 pt-2 flex-1 max-w-md mx-auto">
        {gigs.map((gig, idx) => (
          <GigCard
            key={idx}
            {...gig}
            isFavorite={favorites[idx]}
            onFavorite={() => handleFavorite(idx)}
            expanded={expandedIdx === idx}
            onExpand={() => setExpandedIdx(expandedIdx === idx ? -1 : idx)}
            onApply={handleApplyClick}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <BottomNav />
      </div>
      <ApplyConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmApply}
        onCancel={handleCancelApply}
      />
      <SuccessNotification
        isOpen={isNotificationOpen}
        onClose={handleNotificationClose}
      />
    </div>
  );
}
