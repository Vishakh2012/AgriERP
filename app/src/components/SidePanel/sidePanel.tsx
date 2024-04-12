import { IoPeople } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import SidePanelButton from "./sidePanelButton";




const Sidebar = () => {
    return (
        <div className='w-screen flex'>
            <div className="w-[320px] bg-white text-black hidden md:flex top-0 pr-4 h-screen flex-shrink-0">
                <div className="fixed">
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
            </div>
            <div className='bg-[#f0f7ff] h-full w-full min-h-screen'>
                <Outlet />
            </div>{/* Render the content only if the sidebar is visible */}
        </div>
    );
};

export default Sidebar;

