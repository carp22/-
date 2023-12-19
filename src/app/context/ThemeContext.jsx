"use client"

import React from 'react';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [appTheme, setAppTheme] = useState("light")

    useEffect(() => {
        if (appTheme === "dark") {
            document.querySelector("body").setAttribute("app-theme", "dark");
        } else {
            document.querySelector("body").setAttribute("app-theme", "light");
        }
    }, [appTheme]);

    const setDarkMode = function () {
        setAppTheme("dark");
        document.querySelector("body").setAttribute("app-theme", "dark");
        localStorage.setItem("app-theme", "dark");
    };

    const setLightMode = function () {
        setAppTheme("light");
        document.querySelector("body").setAttribute("app-theme", "light");
        localStorage.setItem("app-theme", "light");
    };

    const handleToggle = function (event) {
        if (event.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    return (
        <ThemeContext.Provider value={{ handleToggle, appTheme }} >
            <div className={`${appTheme} animation`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
