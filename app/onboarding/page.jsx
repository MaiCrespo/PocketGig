"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/button";
import styles from "@/app/globals.css"
import "@/app/onboarding/onboarding.css";

export default function OnboardingPage (){
    const router = useRouter();
    
    return(
        <div className="OnboardingBackground">
            <Image 
                src="/images/lgWhiteLogo.svg"
                alt="PocketGig Logo"
                width={300}
                height={100}
                className="logo"
                priority
            />
            <p>The marketplace where those who need <br/> it done, meet those who get it done.</p>

            <div className="buttonContainer">
                <Button 
                    label="Continue"
                    onClick={() => router.push("/onboarding/step2")}
                />
            </div>
        </div>
    ); 
}