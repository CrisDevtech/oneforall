"use client"


import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast"
import { SendHorizonal } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }),
    itOnDuty: z.string().min(1, {
        message: "IT Person is required",
    }),
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

export default function ServerLogs() {

    const { toast } = useToast()
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
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
        <Form {...form}>
            <h1 className="text-4xl font-semibold p-8">Server Daily Utilities</h1>
            <Separator />

            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-4"
            >
                <div className="col-span-1">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IT Employee</FormLabel>
                                <FormControl>
                                    <Input
                                        autoComplete="off"
                                        disabled={isLoading}
                                        placeholder="IT Employee"
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
                        name="itOnDuty"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>IT on duty</FormLabel>
                                <FormControl>
                                    <Input
                                        autoComplete="off"
                                        disabled={isLoading}
                                        placeholder="Example: Cris"
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
                        name="serverOnTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Server Time On</FormLabel>
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
                                <FormLabel>Server Time off</FormLabel>

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
                                <FormLabel>Nas Time On</FormLabel>
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
                                <FormLabel>Nas Time OFF</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isLoading}
                                        placeholder="Brief description of the problem"
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
                                <FormLabel>Date server</FormLabel>
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
    );
}
