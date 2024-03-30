import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { RiUserSettingsLine } from "react-icons/ri";
import { VscSignOut } from "react-icons/vsc";
import { useAuth } from "../Login/AuthContext";

const ProfileDropdown = () => {
    const {logout} = useAuth()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="w-28 flex-none" variant="outline">
                    <div className="flex justify-between">
                        <IconContext.Provider value={{ size: '20px' }}>
                            <RiUserSettingsLine />
                        </IconContext.Provider>
                        <span className="pl-3">Options</span>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-40">

              {/* Dropdown Content */}
              
                <div className="flex items-center">
                    <IconContext.Provider value={{ size: '20px' }}>
                        <CgProfile />
                    </IconContext.Provider>
                    <Link to={''}><span className="block py-2 ml-2">FPO Profile</span></Link>
                </div>
                <div className="border-t border-gray-200 pt-2 flex items-center">
                    <IconContext.Provider value={{ size: '20px' }}>
                        <IoSettingsOutline />
                    </IconContext.Provider>
                    <Link to={''}><span className="block py-2 ml-2">Logout</span></Link>
                </div>
                <div className="border-t border-gray-200 pt-2 flex items-center">
                    <IconContext.Provider value={{ size: '20px' }}>
                        <VscSignOut/>
                    </IconContext.Provider>
                    <Link to={''}><button onClick={logout} className="block py-2 ml-2">Settings</button></Link>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default ProfileDropdown
