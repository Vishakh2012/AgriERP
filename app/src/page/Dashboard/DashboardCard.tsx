import {
    Card,
    CardContent,
    CardDescription,
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
        <Card className="w-[250px] ml-7 mr-7 h-[130px]">
            <CardHeader>
                <div className="flex gap-6 justify-between">
                    <CardTitle>{props.figures}</CardTitle>
                    <div>
                        {props.icon && <span className="float-right mt-2 ml-4 mr-1">{props.icon}</span>}
                    </div>
                </div>
                <h1 className="mt-4">{props.text}</h1>
            </CardHeader>
            <CardContent>
                <CardDescription className="flex items-start">
                    {props.difference !== undefined && (
                        props.difference < 0 ? (
                            <>
                                <IconContext.Provider value={{ color: "red", className: "mr-2" }}><FaArrowDown/></IconContext.Provider>
                                <span>{props.difference} less than last quarter</span>
                            </>
                        ) : (
                            <>
                                <IconContext.Provider value={{ color: "green", className: "mr-2" }}><FaArrowUp/></IconContext.Provider>
                                <span>{props.difference} more than last quarter</span>
                            </>
                        )
                    )}
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default DashboardCard;
