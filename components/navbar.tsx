import Link from "next/link";
import { Separator } from "./ui/separator";
import { UserButton } from "@clerk/nextjs";




const Navbar = () => {
    return (
        <div className="">
            <div className=" flex justify-between p-4">
                <Link href={'/'}>
                    <div className=" text-4xl font-serif">ONE FOR ALL SERVER SOLUTION</div>
                </Link>
                <div>
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
            <Separator />
        </div>
    );
}

export default Navbar;