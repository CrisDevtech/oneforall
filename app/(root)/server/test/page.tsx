"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"
import { DatabaseZap, Laptop, SendHorizonal, Server } from "lucide-react";
import * as z from "zod";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";


import { useRouter } from "next/navigation";
import Link from "next/link";
import { SelectStaff } from "@/components/select-staff";
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import DateTimeComponent from "@/components/time-date-live";




const formSchema = z.object({
    itOnDuty: z.string(),
    serverOnTime: z.string().min(1, {
        message: "Server time is required",
    }),
    serverOfftime: z.string().min(1, {
        message: "Server time is required",
    }),
    remarks: z.string().min(1),
    nasTimeOn: z.string().min(1, {
        message: "Nas time is required",
    }),
    nasTimeOff: z.string().min(1, {
        message: "Nas time is required",
    }),
    dateofserver: z.string(),
});



export default function Test() {


    const { toast } = useToast()
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            itOnDuty: "",
            serverOnTime: "",
            serverOfftime: "",
            remarks: "",
            nasTimeOn: "",
            nasTimeOff: "",
            dateofserver: undefined,
        },
    });



    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {

            {
                // Create Information functionality
                await axios.post('/api/serverinfo', values);
            }

            toast({
                description: 'Your request has been sent'
            })


            router.refresh();


        } catch (error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                variant: 'destructive'

            })
        }
    }


    const isLoading = form.formState.isSubmitting;


    return (

        <div className="h-screen flex">
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

            {/* Main content */}
            <div className="flex-1 bg-gray-100 flex flex-col">
                {/* Header */}
                <div className="bg-gray-200 h-16 border-b p-4">
                    <h1 className="font-semibold">
                        Reminders: This feature is for testing purposes only and not implemented for production.
                    </h1>
                </div>

                {/* Content */}
                <div className="flex-grow p-4">
                    {/* Your content goes here */}
                    <div className="flex flex-col  items-end px-4">
                        <DateTimeComponent />
                        <Separator />
                    </div>
                    <p className=" pt-4 font-semibold">Fill up the necessary information</p>
                    <div className="pt-4">

                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-4"
                            >

                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="itOnDuty"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>IT Staff</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select a fruit" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>IT Personnel</SelectLabel>
                                                            <SelectItem value="cris">Cris</SelectItem>
                                                            <SelectItem value="gerald">Gerald</SelectItem>
                                                            <SelectItem value="kyle">Kyle</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="serverOnTime"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Server on</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        autoComplete="off"
                                                        min={0}
                                                        placeholder="7:00AM"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="serverOfftime"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Server  off</FormLabel>

                                                <FormControl>
                                                    <Input
                                                        autoComplete="off"
                                                        disabled={isLoading}
                                                        placeholder="4:00PM"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="remarks"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Remarks</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        autoComplete="off"
                                                        placeholder="Remarks"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="nasTimeOn"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Network attached storage on</FormLabel>
                                                <FormControl>
                                                    <Input autoComplete="off" placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="nasTimeOff"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Network attached storage off</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isLoading}
                                                        placeholder=""
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="dateofserver"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Date</FormLabel>
                                                <FormControl>
                                                    <Input disabled={isLoading} onChange={field.onChange} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <Button
                                        disabled={isLoading}
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                                    >
                                        Submit Request
                                        <SendHorizonal className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
                {/* Footer */}
                <div className="bg-gray-200 h-16 border-t p-4">
                    <h1>Developed by Cris</h1>
                </div>
            </div>
        </div>
    );
}
