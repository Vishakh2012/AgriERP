// Header.tsx
import ProfileDropdown from '@/components/Header/ProfileDropdown';
import React, { useState } from 'react';
import { FaBars, FaHome, FaBoxOpen } from 'react-icons/fa';
import SidePanelButton from '../SidePanel/sidePanelButton';
import { PiHandbagFill } from 'react-icons/pi';
import { IoPeople } from 'react-icons/io5';
import { IoMdClose } from "react-icons/io";
interface Headercontent {
    text: string;
}

const Header: React.FC<Headercontent> = (props) => {

    const [showSidebar, setShowSidebar] = useState(true); // State to manage whether to show the sidebar or not

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const today = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[today.getDay()];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();
    const formattedDate = `${day}, ${month} ${date}, ${year}`;

    return (
        <div className='justify-center items-center w-5/6 sm:w-11/12 mt-4'>
            <div className='justify-center sm:justify-none items-center w-full'>

                <div className='flex justify-between items-center w-full h-[100px] bg-white text-black px-4 rounded-lg'>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-bold'>{props.text}</h1>
                        <span className='font-light'>{formattedDate}</span>
                    </div>
                    <button className="flex float-right sm:hidden top-5 left-5" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <div className='hidden sm:flex'>
                        <ProfileDropdown />
                    </div>
                </div>
                {showSidebar && (
                    <div className="fixed top-0 left-0 sm:hidden bg-white w-full h-screen p-4 rounded-lg z-30">
                        <button className='float-right' onClick={toggleSidebar}><IoMdClose size={30} /></button>

                        <ul className='mt-14'>
                            <li className="mb-7"><SidePanelButton text="Dashboard" url='/home' icon={<FaHome />} /></li>
                            <li className="mb-7"><SidePanelButton text="Buying" url='/purchase' icon={<PiHandbagFill />} /></li>
                            <li className="mb-7"><SidePanelButton text="Selling" url='/sales' icon={<PiHandbagFill />} /></li>
                            <li className="mb-7"><SidePanelButton text="Products and Inventory" url='/products' icon={<FaBoxOpen />} /></li>
                            <li className="mb-7"><SidePanelButton text="Staff" url='/staff' icon={<IoPeople />} /></li>
                            <li className="mb-7"><SidePanelButton text="Stake Holders" url='/stakeholders' icon={<IoPeople />} /></li>
                            <li className="mb-7"><SidePanelButton text="Farmers" url='/farmers' icon={<IoPeople />} /></li>
                        </ul>

                    </div>
                )}
            </div>
        </div>

    );
}

export default Header;
