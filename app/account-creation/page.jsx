"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/button";
import styles from "@/app/globals.css"
import TopNav from '@/components/TopNav';
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
//import Image from "/logo.png";//


export default function AccountCreationPage() {
    const router = useRouter();

    return(
            <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="PocketGig Logo" className="w-8 h-8" />
                <span className="font-bold text-xl text-[#003366]">PocketGig</span>
              </div>
              <div className="flex items-center gap-4">
               
    
              </div>
            </header>
    );
}
