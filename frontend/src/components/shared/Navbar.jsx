import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"
import { LogOut } from "lucide-react";


function Navbar() {
    return (
        <div className="bg-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
                <div>
                    <h1 className="text-2xl font-bold">
                        Job<span className="text-[#F83002]">Portal</span>
                    </h1>
                </div>
                <div className="flex items-center gap-12">
                    <ul className="flex font-medium items-center gap-5">
                        <li>Home</li>
                        <li>Jobs</li>
                        <li> Browse</li>
                    </ul>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div >
                                <Avatar className="cursor-pointer">
                                    <AvatarImage
                                        src="https://github.com/shadcn.png"
                                        alt="@shadcn"
                                    />
                                </Avatar>
                                <div>
                                    <h4 className="font-medium">Nikki MERN Stack</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col my-2 text-gray-600">
                                <div className="flex w-fit items-center gap-2 cursor-pointer">

                                    <Button variant="Link">View Profile</Button>
                                </div>
                                <div className="flex w-fit items-center gap-2 cursor-pointer">

                                    <Button variant="Link">Logout</Button>
                                </div>

                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
}

export default Navbar;