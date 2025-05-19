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
            <div className="buttonContainer">
                <Button 
                    label="Continue"
                    onClick={() => router.push("/onboarding/login")}
                />
            </div>
        </div>
    );
}

