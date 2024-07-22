"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"

import { AtSignIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import statesArray from "@/utils/states"
import ConfirmationDialog from "./ConfirmationDialog"
import { useAtom } from "jotai"
import { cartAtom } from "@/store"

// const productsSchema = z.object({
//     name: z.string(),
//     price: z.number().positive(),
//     quantity: z.number().positive(),
//     style: z.string(),
//     image: z.string().url(),
// })

const formSchema = z.object({
    instagramHandle: z
        .string({
            required_error: "Instagram handle is required",
        })
        .min(3, { message: "Instagram handle must be at least 2 characters" })
        .max(30, { message: "Instagram handle can not exceed 30 characters" }),
    email: z
        .string({
            required_error: "Email is required",
        })
        .email(),
    confirmEmail: z
        .string({
            required_error: "Please retype your email",
        })
        .email(),
    firstName: z
        .string({
            required_error: "First name is required",
        })
        .min(2, { message: "First name must be at least 2 characters" })
        .max(30, { message: "First name can not exceed 30 characters" }),
    lastName: z
        .string({
            required_error: "Last name is required",
        })
        .min(2, { message: "Last name must be at least 2 characters" })
        .max(30, { message: "Last name can not exceed 30 characters" }),
    address1: z
        .string({
            required_error: "Address is required",
        })
        .min(5, { message: "Address must be at least 5 characters" })
        .max(50, { message: "Address can not exceed 50 characters" }),
    address2: z
        .string()
        .min(5, { message: "Address must be at least 5 characters" })
        .max(50, { message: "Address can not exceed 50 characters" })
        .optional(),
    city: z
        .string({
            required_error: "City is required",
        })
        .min(2, { message: "City must be at least 2 characters" })
        .max(30, { message: "City can not exceed 30 characters" }),
    state: z.string({ required_error: "Please select a state" }),
    zipcode: z
        .string({
            required_error: "Zipcode is required",
        })
        .min(5)
        .max(10),
})

const ShippingForm = () => {
    const [cartItems] = useAtom(cartAtom)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //     instagramHandle: "",
        //     email: "",
        //     confirmEmail: "",
        //     firstName: "",
        //     lastName: "",
        //     address1: "",
        //     address2: "",
        //     city: "",
        //     zipcode: "",
        //     products: [],
        // },

        // defaultValues: {
        //     instagramHandle: "markhamil",
        //     email: "dkwk2dw@gmail.com",
        //     confirmEmail: "dkwk2dw@gmail.com",
        //     firstName: "Thomas",
        //     lastName: "Tremt",
        //     address1: "8832 Address St",
        //     address2: "Apt C",
        //     city: "Fairfax",
        //     zipcode: "22032",
        //     state: "Virginia",
        //     products: [],
        // },
    })

    function handleSubmit() {
        console.log("Submitting form:", { ...form.getValues(), products: cartItems })
    }

    const disableButton = !form.formState.isValid || cartItems.length === 0

    return (
        <Form {...form}>
            <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 grid grid-cols-4 gap-3">
                <FormField
                    control={form.control}
                    name="instagramHandle"
                    render={({ field }) => (
                        <FormItem className="col-span-4">
                            <FormLabel>Instagram Handle</FormLabel>
                            <FormControl>
                                <Input startAdornment={<AtSignIcon size={16} />} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="col-span-4 md:col-span-2">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmEmail"
                    render={({ field }) => (
                        <FormItem className="col-span-4 md:col-span-2">
                            <FormLabel>Confirm Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem className="col-span-4 md:col-span-2">
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem className="col-span-4 md:col-span-2">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="address1"
                    render={({ field }) => (
                        <FormItem className="col-span-4">
                            <FormLabel>Address Line 1</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="address2"
                    render={({ field }) => (
                        <FormItem className="col-span-4">
                            <FormLabel>Apartment, Suite, Etc. (optional)</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="col-span-4">
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                        <FormItem className="col-span-4 md:col-span-2">
                            <FormLabel>State</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a state" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {statesArray.map((state) => (
                                        <SelectItem key={state} value={state}>
                                            {state}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="zipcode"
                    render={({ field }) => (
                        <FormItem className="col-span-4 md:col-span-2">
                            <FormLabel>Zipcode</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <ConfirmationDialog
                    buttonProps={{
                        className: "col-span-4",
                        type: "button",
                        disabled: disableButton,
                    }}
                    onSubmit={handleSubmit}
                    shipment={form.getValues()}
                />
            </form>
        </Form>
    )
}

export default ShippingForm
