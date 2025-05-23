"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/button";
import TextField from "@/components/TextFeild/TextFeild";
import styles from "@/app/globals.css"
import "@/app/login/login.css";
import InputField from "@/components/InputField";

export default function LoginPage(){
    const router = useRouter();
    return(
    
        <div className="LoginBackground">
            <div className="gradient-overlay"></div>
             <div className="LoginImage">
                <div className="logo-container">
                    <Image 
                        src="/images/logo2.png"
                        alt="PocketGig Logo"
                        width={90}
                        height={36}
                        priority
                        quality={100}
                    />
                </div>
            </div>
    
            <h2>Sign-In to PocketGig!</h2>
        
            <div className="inputContainer">
                <InputField id="email" label="Email" sx={{width: "100%", maxWidth: "358px"}}>
                    <input type="email" placeholder="Enter Email..." />
                </InputField> 

                <InputField id="password" label="Password" sx={{width: "100%", maxWidth: "358px",}}>
                    <input type="password" placeholder="Enter Password..." />
                </InputField> 
            </div>
           

                <div className="buttonContainer">
                    <Button
                    label="Sign-In"
                    onClick={() => router.push("/home")}
                    />
                    <div></div>
                     <Button
                    label="Create an Account"
                    variant="babyButtonOutline"
                    border="1px solid var(--teal-blue)"
                    textColor="var(--teal-blue)"
                    onClick={() => router.push("/account-creation")}
                    />


                 
                </div>
            </div>
    
    );
}
