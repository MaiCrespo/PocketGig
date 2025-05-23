"use client";
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

    return(
        <div className="account-creation-page" style={{backgroundColor: "var(--white)"}}>
               <TopNav hideIcons={true} />
            <h1 style={{fontSize: "22px", fontWeight: "bold", marginLeft: "14px", marginTop: "90px"}}>Account Creation</h1>
            <div className="account-creation-form"  style={{display: "flex", flexDirection: "column",  height: "100vh", marginTop: "60px",}}>
                <div className="inputContainer">

                    <InputField id="firstName" label="First Name" sx={{width: "100%", maxWidth: "358px"}}>
                        <input 
                        type="text" 
                        placeholder="Enter First Name..."
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                         />
                    </InputField>

                    <InputField id="lastName" label="Last Name" sx={{width: "100%", maxWidth: "358px"}}>
                        <input
                          type="text"
                           placeholder="Enter Last Name..."
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                            />
                    </InputField>

                    <InputField
                     id="email" 
                     label="Email" 
                     sx={{width: "100%", maxWidth: "358px"}}>
                        <input type="email" placeholder="Enter Email..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputField> 
                    <InputField id="phoneNumber" label="Phone Number" sx={{width: "100%", maxWidth: "358px",}}>
                        <input type="tel" placeholder="Enter Phone Number..." 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        />
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
            onClick={() => router.push("/welcomeMessage")}/>
            </div>
       </div>
    
    </div>
 )
}