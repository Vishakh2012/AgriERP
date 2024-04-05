import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the icon you want to use for the toggle butto
import { IoPeople } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import SidePanelButton from "./sidePanelButton";




const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true); // State to manage whether to show the sidebar or not

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='flex'>
      {showSidebar && (
        <div className="w-1/5 bg-white text-black hidden md:block">
          <div className="fixed">
            <ul className='mt-14'>
              <li className="mb-7"><SidePanelButton text="Dashboard" url='/home' icon={<FaHome />}/></li>
              <li className="mb-7"><SidePanelButton text="Buying" url='/purchase' icon={<PiHandbagFill />}/></li>
              <li className="mb-7"><SidePanelButton text="Selling" url='/sales' icon={<PiHandbagFill />}/></li>
              <li className="mb-7"><SidePanelButton text="Products and Inventory" url='/products' icon={<FaBoxOpen />}/></li>
              <li className="mb-7"><SidePanelButton text="Staff" url='/staff' icon={<IoPeople />}/></li>
              <li className="mb-7"><SidePanelButton text="Stake Holders" url='/stakeholders' icon={<IoPeople />}/></li>
              <li className="mb-7"><SidePanelButton text="Farmers" url='/farmers' icon={<IoPeople />}/></li>
            </ul>
          </div>
        </div>
      )}
      <div className={`w-${showSidebar ? 4/5 : 'full'} flex-wrap  bg-gray-100 overflow-y-auto`}>
      <div className="md:hidden"> {/* Render the toggle button only for small screens */}
      <button onClick={toggleSidebar}><FaBars /></button>
          </div>
        {showSidebar && <Outlet />} {/* Render the content only if the sidebar is visible */}
      </div>
    </div>
  );
};

export default Sidebar;

