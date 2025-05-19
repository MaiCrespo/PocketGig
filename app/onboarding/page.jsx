"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/button";
import styles from "@/app/globals.css"
import "@/app/onboarding/onboarding.css";



export default function OnboardingPage (){
    return(

        <div className="OnboardingBackground" background="img/">
            
            <p className="">The marketplace where those who need it done, meet those who get it done.</p>

            <div className="buttonContainer">
                <Button 
                    label="Continue">
                    onClick={() => Router.push("/onboarding/step2")}
                </Button>
            </div>
           

        </div>
    ); 
}