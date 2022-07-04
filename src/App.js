import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Dashboard, Orders, Calendar, Employees, Stacked, Pyramid, Customers,Area, Bar, Pie, Financial, ColorMapping, Line, Overview, Charts, Table, TableTest } from './pages';

import { useStateContext } from './contexts/ContextProvider';


import './App.css';




const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, setCurrentMode, setCurrentColor } = useStateContext();
  
  // useEffect to retrieve theming information from the localStorage
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  });


  return (
    // Wrapper for Dark/light Mode
    <div className={currentMode === 'Light' ? 'light' : 'dark'}>
      <BrowserRouter>

        {/* wrapper Pages */}
        <div className="flex relative dark:bg-main-dark-bg">

          {/* Config theme Button right bottom  */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="settings"
              position="top"
            >
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true) }
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Display or not SideBar Menu ---- w-0 to not display sidebar  */}
          {
            activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>  
            )
          }

          {/* Wrapper Routes Pages include Navbar and RightSideBar config theme */}
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72' : 'flex-2'}`
            }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {/* RightSideBar Config Theme */}
              {
                themeSettings && (
                  <ThemeSettings />
                )
              }
              <Routes>
                {/* Home */}
                <Route path="/" element={<Overview />} />

                {/* Training Charts For NooCo */}
                <Route path="/Overview" element={<Overview />} />
                <Route path="/Charts" element={<Charts />} />
                <Route path="/Table" element={<Table />} />

                {/* Charts Tuto SyncFusion */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

                {/* Apps tuto SyncFusion */}
                <Route path="/calendar" element={<Calendar />} />

                {/* Table Tuto SyncFusion */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>



    </div>
  )
}

export default App