import { currentUser } from "@clerk/nextjs";
import { Separator } from "./ui/separator";

export default async function User() {

    const user = await currentUser();
    return (
        <div className="">
            <h1 className=" flex items-start text-4xl font-bold pb-4">Welcome, {user?.firstName}</h1>
            <Separator />
        </div>
    )
}