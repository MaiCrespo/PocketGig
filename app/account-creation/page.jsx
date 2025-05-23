"use client";
import { useState } from "react";
import React from "react";
import TopNav from "@/components/TopNav";
import InputField from "@/components/InputField";
import "@/app/account-creation/account-creation.css";
import Button from "@/components/Button/button.jsx";
import { useRouter } from "next/navigation";
import WelcomeMessage from "@/components/welcomeMessage";


export default function AccountCreationPage(){
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const validateFirstName = (value) => {
        if (!value.trim()) {
            setFirstNameError("First name is required");
        } else if (value.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    };

    return(
        <div className="account-creation-page" style={{backgroundColor: "var(--white)"}}>
               <TopNav hideIcons={true} />
            <h1 style={{fontSize: "30px", fontWeight: "medium", marginLeft: "14px", marginTop: "90px"}}>Account Creation</h1>
            <div className="account-creation-form"  style={{display: "flex", flexDirection: "column",  height: "100vh", marginTop: "30px",}}>
                <div className="inputContainer">

                    <InputField id="firstName" label="First Name" sx={{width: "100%", maxWidth: "358px"}}>
                        <input 
                        type="text" 
                        placeholder="Enter First Name..."
                        value={firstName}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            setFirstName(newValue);
                            if (newValue.trim().length >= 2) {
                                setFirstNameError("");
                            } else {
                                validateFirstName(newValue);
                            }
                        }}
                         />
                    </InputField>
                    {firstNameError && (
                        <div style={{
                            color: 'var(--red-error)',
                            fontSize: '12px',
                            marginLeft: '-220px',
                            marginTop: '-20px',
                            marginBottom: '10px'
                        }}>
                            {firstNameError}
                        </div>
                    )}
   

                    <InputField id="lastName" label="Last Name" sx={{width: "100%", maxWidth: "358px"}}>
                        <input
                          type="text"
                           placeholder="Enter Last Name..."
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                            />
                    </InputField>

                    <InputField Id="email" label="Email" sx={{width: "100%", maxWidth: "358px"}}>
                        <input type="email" placeholder="Enter Email..." />
                    </InputField> 
                    <InputField id="phoneNumber" label="Phone Number" sx={{width: "100%", maxWidth: "358px",}}>
                        <input type="tel" placeholder="Enter Phone Number..." />
                    </InputField>
                    <InputField id="password" label="Password" sx={{width: "100%", maxWidth: "358px",}}>
                        <input type="password" placeholder="Enter Password..." />
                    </InputField> 
                    
                    <InputField id="retypePassword" label="Retype Password" sx={{width: "100%", maxWidth: "358px",}}>
                        <input type="password" placeholder="Retype Password..." />
                    </InputField>

            </div>
            <div className="buttonContainer">
                <Button 
                    label="Create Account"
                    onClick={() => {
                        if (!firstName.trim()) {
                            setFirstNameError('First name is required' );
                            return;
                        }
                        router.push(`/home?welcome=true&firstName=${firstName}`);
                    }}
                />
            </div>
       </div>
    
    </div>
 )
}