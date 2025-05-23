"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/button.jsx";
import styles from "@/app/globals.css";


export default function WelcomeMessage(){
    const router = useRouter();
    const firstName = router.query.firstName;

    return(
        <div className="welcome-message" >
            <h1> Hi, {firstName}, Welcome to PocketGig!</h1>
            <Button label={"Get Started"} onClick={() => router.push("/home")}/>
        </div>
    )
}
