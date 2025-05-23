"use client";
import React, { useState } from "react";
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
             <div className="LoginImage"></div>
    
            <h2>Sign-In to PocketGig!</h2>
            <div className="inputContainer">

        
                <InputField className="inputField"
                    style={{
                        width: "358px", 
                        height: "48px", 
                        borderRadius: "8px", 
                        padding: "16px", 
                        marginBottom: "10px", 
                        marginTop: "10px",
                        backgroundColor: "var(--chip-blue)",
                        border: "1px solid var(--inner-blue)"
                    }}
                    label="Email"
                    type="email"
                    placeholder="Enter Email..."
                />
                <InputField 
                    className="inputField"
                    style={{ width:"358px",  height:"48px"}}
                    label="Password"
                    type="password"
                    placeholder="Enter Password..."
                />

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
