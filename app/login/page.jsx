"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/button";
import TextField from "@/components/TextFeild/TextFeild";
import styles from "@/app/globals.css"
import "@/app/login/login.css";
export default function LoginPage(){
    const router = useRouter();
    return(
    
        <div className="LoginBackground">
             <div className="LoginImage"></div>
    
            <h2>Sign-In to PocketGig!</h2>
            <div className="inputContainer">

        
                <TextField className="inputField">
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email..." />
                </TextField>

                <TextField className="inputField">
                    <label>Password</label>
                    <input type="Password" placeholder="Enter Password..." />
                </TextField>
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
                    onClick={() => router.push("/home")}
                    />
                 
                </div>
            </div>
        </div>
    );
}
