import Sidebar from "./sidePanel";
import { FaBars } from 'react-icons/fa'; // Import the icon you want to use for the toggle butto
import { useState } from "react";
const ResponsiveSidePanel = () => {
    const [showSidebar, setShowSidebar] = useState(true); // State to manage whether to show the sidebar or not

    return (
        <div className="flex">
            {showSidebar && <Sidebar />}
            <div className={`w-${showSidebar ? '4/5' : 'full'} flex-auto bg-gray-100 overflow-y-auto`}>
                <button className="fixed top-5 left-5" onClick={toggleSidebar}>
                    <FaBars />
                </button>
                <div className="p-10">
                    {/* Your main content here */}
                </div>
            </div>
        </div>
    );
};

export default ResponsiveSidePanel
