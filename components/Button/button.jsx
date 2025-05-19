"use client";
import React from "react";

const Button = ({
  display="inline-flex",
  label = "Button",
  variant = "primary",
  color =  "var(--ocean-blue)",
  onClick = () => {},
  href,
  textColor =  "var(--white)",
  border = "none",
  borderRadius = "8px",
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
  
      },

      lg:{
        width: "360px",
        height:"56px",
        borderRadius:"8px",
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
  };

  const buttonContent = (
    <>
      {icon && <span style={{ marginRight: label ? "8px" : 0 }}>{icon}</span>}
      {label}
    </>
  );

  // Render as link or button //
  if (href) {
    return (
      <a
        href={href}
        style={getButtonStyles()}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      style={getButtonStyles()}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

   export default Button;
