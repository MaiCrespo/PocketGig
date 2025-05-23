"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button/button";
import styles from "@/app/globals.css"
import TopNav from '@/components/TopNav';
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Stepper from "@/components/Stepper";
//import Image from "/logo.png";//



export default function AccountCreationPage() {
    const router = useRouter();

    return(
<div className="account-creation-container bg-white" style={{height: "100vh"}}>
        <div>
             <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="PocketGig Logo" className="w-8 h-8" />
                <span className="font-bold text-xl text-[#003366]">PocketGig</span>
                 <div className="flex items-center gap-4"></div>
             </div>
            </header>
          </div>
        

        <h2 className="text-left ml-10 mt-10 font-medium text-2xl text-[#003366]">Create an Account</h2>
    
        
        <Stepper
            steps={["Step 1", "Step 2", "Step 3"]}
            currentStep={1}
       />
       <div className="acccount-form-container" style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop:"60px"}}>
            <input type="text" placeholder="First Name" className="firstNameinput" style={{width: "358px", height: "48px", border:"1px solid var(--inner-blue)", marginTop:"20px", borderRadius:"8px" }} />
            <input type="text" placeholder="Last Name" className="lastNameInput" style={{width: "358px", height: "48px", border:"1px solid var(--inner-blue)", marginTop:"20px", borderRadius:"8px"}} />
            <input type="email" placeholder="Email" className="emailInput" style={{width: "358px", height: "48px", border:"1px solid var(--inner-blue)", marginTop:"20px", borderRadius:"8px"}} />
            <input type="password" placeholder="Password" className="passwordInput" style={{width: "358px", height: "48px", border:"1px solid var(--inner-blue)", marginTop:"20px", borderRadius:"8px"}} />
            <input type="password" placeholder="Confirm Password" className="confirmPasswordInput" style={{width: "358px", height: "48px", border:"1px solid var(--inner-blue)", marginTop:"20px", borderRadius:"8px"}} />    
      </div>
      <div className="create-account-button" style={{display: "flex", justifyContent: "center", marginTop:"60px"}}>
        <Button
        style={{width: "358px", height: "48px", borderRadius:"8px", backgroundColor:"var(--inner-blue)", color:"white", fontSize:"16px", fontWeight:"400", lineHeight:"24px", letterSpacing:"0.15px", fontFamily:"'Inter', sans-serif"}}
        label="Create Account"
        onClick={() => router.push("/dashboard")}
        >
    
        </Button>
      </div>

</div>
    );
}
