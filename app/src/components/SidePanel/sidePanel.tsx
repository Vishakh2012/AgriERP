import { IoPeople } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa6";

import { Outlet} from "react-router-dom";
import SidePanelButton from "./sidePanelButton";


const Sidebar = () => {
  return (
    <div className='flex '>
      <div className="h-screen w-64 bg-white text-black shadow-lg">
        <div className="p-0">
        <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
        <ul className='mt-14 '>
            <li className="mb-7"><SidePanelButton text="Dashboard" url='/home' icon={<FaHome/>}/></li>
            <li className="mb-7"><SidePanelButton text="Buying" url='/purchase' icon={<PiHandbagFill/>}/></li>
            <li className="mb-7"><SidePanelButton text="Selling" url='/sales' icon={<PiHandbagFill/>}/></li>
            <li className="mb-7"><SidePanelButton text="Products and Inventory" url='/products' icon={<FaBoxOpen/>}/></li>
            <li className="mb-7"><SidePanelButton text="Staff" url='/staff' icon={<IoPeople/>}/></li>
            <li className="mb-7"><SidePanelButton text="Stake Holders" url='/stakeholders' icon={<IoPeople/>}/></li>
            <li className="mb-7"><SidePanelButton text="Farmers" url='/farmers' icon={<IoPeople />}/></li>
        </ul>
      </div>        
    </div>
      <div className="flex-auto bg-gray-100">
              <Outlet/>
      </div>
    </div>
  );
};

export default Sidebar;
