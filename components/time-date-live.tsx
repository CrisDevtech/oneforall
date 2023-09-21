"use client"



import React, { useState, useEffect } from 'react';

export default function DateTimeComponent() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        // Update the currentDateTime every second
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null
    }

    return (
        <div className=' pb-4'>
            <h1 className=' text-sm font-light'>Current Date and Time:</h1>
            <p className=' text-sm font-light'>{currentDateTime.toLocaleString()}</p>
        </div>
    );
}
