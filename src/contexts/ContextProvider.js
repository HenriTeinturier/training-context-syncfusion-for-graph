import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const initialState = {
  // Exemple initialState for ContextProvider
  // To display or not SideBar from navbarMenu like: Message, profil...
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  // activeMenu = sideBarMenu display or not
  const [activeMenu, setActiveMenu] = useState(true); 
  // state of the screensize on loading page and after when clic on links from sidebarMenu. setScreenSize is use in navbar.
  const [screenSize, setScreenSize] = useState(undefined);

  // states to manage colors and theme
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  // Exemple to change initialState without reducer and switch
  const [isClicked, setIsClicked] = useState(initialState);
  // Toggle navbar menu
  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: !isClicked[clicked],
    })
  };
  // close all navbar menu
  const handleClickClose = () => {
    setIsClicked({
      ...initialState,
    })
  };


  // set dark/light Mode
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value)
    setThemeSettings(false);
  }

  // set Color Theme
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  }
  

  return (
    <StateContext.Provider
      value={{
        // activeMenu = activeMenu, so we can only do activeMenu,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        handleClickClose,
        screenSize,
        setScreenSize,
        setCurrentMode,
        setCurrentColor,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings
       }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
