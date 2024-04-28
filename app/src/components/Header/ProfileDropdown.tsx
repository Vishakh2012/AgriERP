// ProfileDropdown.tsx
import { Button } from "@/components/ui/button"

import {
    LogOut,
    User,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "../../page/Login/AuthContext";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
    const { logout } = useAuth()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44">
                
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <Link to={'/fpo'}><span>FPO Profile</span></Link>
                        <DropdownMenuShortcut>⇧⌘F</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export default ProfileDropdown
