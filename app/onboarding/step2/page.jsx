"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/button";
import styles from "@/app/globals.css"
import "@/app/onboarding/step2/step2.css";

export default function Step2Page() {
    const router = useRouter();

    return(
        <div className="OnboardingBackground">
            <div className="gradient-overlay"></div> 

            <Image 
                src="/images/lgWhiteLogo.svg"
                alt="PocketGig Logo"
                width={300}
                height={100}
                className="logo"
                priority
            />
            <div className="roleContainer">
                
    
            <div className="roleBox">
                 <Image
                    src="/images/clipboard.svg"
                    alt="clipboard icon"
                    width={60}
                    height={70}
                    />
                    <h3>Gig Assigners</h3>
                    <p>Create Gig Posts to hire out tasks</p>
             </div>
            
             <div className="roleBox">
                    <Image
                        src="/images/search.svg"
                        alt="clipboard icon"
                        width={60}
                        height={70}
                        />
                    <h3>Gig Seekers</h3>
                    <p>Get paid to do approved tasks</p>
           </div>
             
            </div>

            
           
            <div className="buttonContainer">
                <Button 
                    label="Continue"
                    onClick={() => router.push("/onboarding/login")}
                />
            </div>
        </div>
    );
}

