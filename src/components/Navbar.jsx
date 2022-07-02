import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown  } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import profil from '../data/profil.jpg';
import { UserProfile } from '.';

import { useStateContext } from '../contexts/ContextProvider';

// with tuto automatisation of navbar buttons
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  // to setScreenSize at opening and 
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // to call function at start
    handleResize();

    //in React we have to remove addEventListerner
    return () => window.removeEventListener('resize', handleResize);

  }, [setScreenSize]);

  // Display or not sideBar according to screenSize
  // so closed automatic SideBarMenu if change screenSize
  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }

  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />

      <div className="flex">
      <TooltipComponent content="Profile" position="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('userProfile')}>
          <img className="rounded-full w-8 h-8" src={profil} alt="avatar" />
          <p>
             <span className="text-gray-400 text-14">Hi, </span> {' '}
             <span className="text-gray-400 font-bold ml-1 text-14">Henri</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </TooltipComponent>

      {/* display Cart, Chat, Notification and userProfile / State */}
      {isClicked.userProfile && <UserProfile />}

      </div>


    </div>
  )
}

export default Navbar