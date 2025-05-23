"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/globals.css"

const TextField = () => {
    const [value, setValue] = useState('');
  
    // Container styles
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '2rem auto',
      fontFamily: 'Arial, sans-serif',
    };
  
    // Field container style
    const fieldContainerStyle = {
      position: 'relative',
      marginTop: '1rem',
    };
  
    // Input field style
    const inputStyle = {
      width: '100%',
      padding: '15px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid var(--inner-blue)',
      backgroundColor: 'var(--chip-blue)',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      outline: 'none',
    };
  
    // Focus style for input
    const inputFocusStyle = {
      ...inputStyle,
      borderColor: 'var(--midnight)',
      boxShadow: '0 0 0 2px rgba(137, 207, 240, 0.3)',
    };
  
    // Label style
    const labelStyle = {
      position: 'absolute',
      left: '12px',
      top: '-10px',
      fontSize: '14px',
      backgroundColor: 'var(--inner-blue)',
      padding: '0 4px',
      color: 'var(--ocean-blue)',
      transition: 'color 0.3s',
      pointerEvents: 'none',
      borderRadius: '2px',
    };
  
    // Helper text style
    const helperTextStyle = {
      fontSize: '12px',
      color: '#666',
      marginTop: '6px',
      marginLeft: '4px',
    };
  
    // Handle focus event
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };
    
}

export default TextField;