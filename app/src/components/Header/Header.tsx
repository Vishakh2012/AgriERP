import ProfileDropdown from '@/components/Header/ProfileDropdown';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
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
        <div className='justify-center md:justify-none items-center w-full'>

            <div className='flex justify-between items-center w-full h-[100px] bg-white text-black px-4 rounded-lg'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold'>{props.text}</h1>
                    <span className='font-light'>{formattedDate}</span>
                </div>
                <button className="flex float-right md:hidden top-5 left-5" onClick={toggleSidebar}>
                    <FaBars />
                </button>
                <div className='hidden md:flex'>
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    );
}

export default Header;
