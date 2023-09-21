import { auth } from "@clerk/nextjs";
import { DatabaseZap, Server, Laptop } from "lucide-react";
import Link from "next/link"
import { AspectRatio } from "./ui/aspect-ratio";
import { Separator } from "./ui/separator";
import User from "./current-user";


const Sidebar = () => {



    return (
        <AspectRatio ratio={16 / 9}>
            <div className="flex h-full">
                {/* Sidebar */}

                <div className="flex flex-col items-center w-[300px] border-r bg-gray-100 h-full">
                 
                    <h1 className="text-2xl font-bold mb-4 pt-4">Administration</h1>
                    <Separator />
                    <ul className="flex flex-col items-start space-y-4 pt-4">
                        <li className="flex items-center transition duration-300 transform hover:translate-x-2  hover:bg-gray-300 px-2
                rounded-md py-2">
                            <DatabaseZap className="mr-2" />
                            <Link href="/" className="hover:text-blue-500">Menu Management</Link>
                        </li>
                        <li className="flex items-center transition duration-300 transform hover:translate-x-2 hover:bg-gray-300 px-2
                rounded-md py-2">
                            <Server className="mr-2" />
                            <Link href="/server/test" className="hover:text-blue-500">Server Daily Records</Link>
                        </li>
                        <li className="flex items-center transition duration-300 transform hover:translate-x-2  hover:bg-gray-300 px-2
                rounded-md py-2">
                            <Laptop className="mr-2" />
                            <Link href="/it-support-management" className="hover:text-blue-500">IT Support Management</Link>
                        </li>
                    </ul>
                </div>


                {/* Additional content to the right */}
                <div className="flex-grow p-4">
                    <User />
                    <p className=" pt-4">
                        I built this project for Server Administration. It provides you with a user-friendly interface to manage your servers efficiently.
                    </p>
                    <p>
                        Some of the key features include:
                    </p>
                    <ul className="list-disc pl-5">
                        <li>Server management and configuration</li>
                        <li>Daily records and logs</li>
                        <li>IT support ticket system</li>
                        <li>Menu and content management</li>
                    </ul>
                    <p>
                        Feel free to explore and utilize the tools available in the sidebar to streamline your server administration tasks.
                    </p>
                </div>
            </div>
        </AspectRatio>
    );
}

export default Sidebar;
