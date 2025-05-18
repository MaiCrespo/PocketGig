import React, { useState } from "react";

const Button = ({
  label = "Button",
  variant = "primary",
  color = "#ocean-blue",
  onClick = () => {},
  href,
  textColor = "#ffffff",
  border = "none",
  borderRadius = "12px",
  showOverlay = false,
  overlayContent = "Overlay Content",
  size = "lg",
  icon,
}) => {

  // variants
   const variants = {

        oceanButton:{
          backgroundColor: "var(--ocean-blue)",
          textColor: "var(--white)",
          border: "none", 
        },

        babyButton:{
          backgroundColor:"var(--baby-blue)",
          textColor:"var(--teal-blue)",
          border:"none"
        },
        babyButtonOutline:{
          backgroundColor:"var(--baby-blue)",
          textColor:"var(--teal-blue)",
          border:"1px solid var(--teal-blue)",
        },
    
        tealButton:{
          backgroundColor:"var(--teal-blue)",
          textColor:"var(--white)",
          border:"none"
        },
      };


    const sizes ={
      sm:{
        width: "40px",
        height:"38px",
        borderRadius:"8px",
      },

      md:{
        width: "auto",
        height:"32px",
        borderRadius:"8px",
        fontSize:"none",
        svgicon:"{none}",
      },

      lg:{
        width: "392px",
        height:"56px",
        borderRadius:"8px",
        fontSize:"none",
        svgicon:"{none}",
      },
    };
  

   // Get styles based on variant and size
  const getButtonStyles = () => {
    const variantStyle = variants[variant] || variants.oceanButton;
    const sizeStyle = sizes[size] || sizes.md;
    
    return {
      backgroundColor: variantStyle.backgroundColor,
      color: textColor || variantStyle.textColor,
      border: border || variantStyle.border,
      borderRadius: borderRadius || sizeStyle.borderRadius || "var(--border-radius-md)",
      width: sizeStyle.width,
      height: sizeStyle.height,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: size === "md" ? "0 var(--spacing-4)" : "0",
      fontFamily: "var(--font-family)",
      transition: "all 0.2s ease",
    };
   }
  };
   export default Button;