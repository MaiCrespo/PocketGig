"use client";
import React from "react";
import TopNav from "@/components/TopNav";
import InputField from "@/components/InputField";
import "@/app/account-creation/account-creation.css";
import Button from "@/components/Button/button.jsx";
import { useRouter } from "next/navigation";
export default function AccountCreationPage(){
    const router = useRouter();
    return(
        <div className="account-creation-page" style={{backgroundColor: "var(--white)"}}>
               <TopNav hideIcons={true} />
            <h1 style={{fontSize: "22px", fontWeight: "bold", marginLeft: "14px", marginTop: "90px"}}>Account Creation</h1>
            <div className="account-creation-form"  style={{display: "flex", flexDirection: "column",  height: "100vh", marginTop: "60px",}}>
                <div className="inputContainer">

                    <InputField id="firstName" label="First Name" sx={{width: "100%", maxWidth: "358px"}}>
                        <input type="text" placeholder="Enter First Name..." />
                    </InputField>

                    <InputField id="lastName" label="Last Name" sx={{width: "100%", maxWidth: "358px"}}>
                        <input type="text" placeholder="Enter Last Name..." />
                    </InputField>

                    <InputField id="email" label="Email" sx={{width: "100%", maxWidth: "358px"}}>
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
            label={"Create Account"}
            onClick={() => router.push("/home")}/>
            </div>
       </div>
    
    </div>
 )
}