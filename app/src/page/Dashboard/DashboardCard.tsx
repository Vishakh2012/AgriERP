import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";
import { IconContext } from "react-icons";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface DashboardCardContent {
    text: string;
    icon?: ReactNode;
    figures: number;
    difference?: number;
}

const DashboardCard: React.FC<DashboardCardContent> = (props) => {
    return (
        <Card className="w-5/6 md:w-1/4 flex flesx-wrap  h-[130px] mb-2 justify-center items-center ">
            <CardHeader className="mt-0">
                <div className="flex justify-between">
                    <div>
                    <CardTitle>{props.figures}</CardTitle>
                    </div>
                    <div>
                        {props.icon && <span className="float-right">{props.icon}</span>}
                    </div>
                </div>
                <div>
                <h1>{props.text}</h1>
                </div>
                
                <div className="mt-5 flex items-center">
                {props.difference !== undefined && (
                        props.difference < 0 ? (
                            <>
                                <IconContext.Provider value={{ color: "red", className: "mr-2" }}><FaArrowDown/></IconContext.Provider>
                                <span className="text-sm text-gray-500">{props.difference} less than last quarter</span>
                            </>
                        ) : (
                            <>
                                <IconContext.Provider value={{ color: "green", className: "mr-2" }}><FaArrowUp/></IconContext.Provider>
                                <span className="text-sm text-gray-500">{props.difference} more than last quarter</span>
                            </>
                        )
                    )}
                </div>
            </CardHeader>
        </Card>
    );
};

export default DashboardCard;
