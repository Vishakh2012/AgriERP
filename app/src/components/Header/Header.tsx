import ProfileDropdown from '@/components/Header/ProfileDropdown';
import React from 'react';

interface Headercontent{
    text:string;
}

const Header:React.FC<Headercontent> = (props) => {
    const today = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[today.getDay()];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();
    const formattedDate = `${day}, ${month} ${date}, ${year}`;
  
    return (
        <div className='flex justify-between items-center w-full h-[100px] bg-white text-black px-5 rounded-lg'>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>{props.text}</h1>
                <span className='font-light'>{formattedDate}</span>
            </div>
            <div>
                <ProfileDropdown/>
            </div>
        </div>
    );
}

export default Header;
