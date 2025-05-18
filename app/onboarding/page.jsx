import React from "react";
import "@/app/globals.css";
import Button from "@/components/Button/button";

function ContinueButton( {
    label = "Continue",
    variant = "oceanButton",
    onClick = () => {},
    href,
    textColor = "#ffffff",
    border = "none",
    borderRadius = "12px",
    showOverlay = false,
    overlayContent = "Overlay Content",
    size = "lg",
    }) {
    const router = useRouter();
    
    return (
        <Button
        label={label}
        variant={variant}
        onClick={() => {
            router.push(href);
            onClick();
        }}
        textColor={textColor}
        border={border}
        borderRadius={borderRadius}
        showOverlay={showOverlay}
        overlayContent={overlayContent}
        size={size}
        />
    );
};