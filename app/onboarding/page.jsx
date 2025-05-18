"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/button";
import styles from "@/app/globals.css"



export default function OnboardingPage (){
    return(

        <div className="OnboardingBackground" background="img/">
            
            <p className="">The marketplace where those who need</p>
            <p className="">it done, meet those who get it done.</p>
           <Button 
             label="Continue">
           </Button>

        </div>
    ); 
}