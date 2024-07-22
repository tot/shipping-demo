import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TruckIcon } from "lucide-react"
import { Shipment } from "@/lib/types"
import Link from "next/link"

interface ConfirmationDialogProps {
    buttonProps?: React.ComponentProps<typeof Button>
    shipment: Shipment
    onSubmit: () => void
}

const labelMapping: { [key: string]: string } = {
    instagramHandle: "Instagram Handle",
    email: "Email",
    confirmEmail: "Confirm Email",
    firstName: "First Name",
    lastName: "Last Name",
    address1: "Address Line 1",
    address2: "Address Line 2",
    city: "City",
    state: "State",
    zipcode: "Zipcode",
}

const omittedFields = ["products", "confirmEmail"]

const ConfirmationDialog = ({ buttonProps, shipment, onSubmit }: ConfirmationDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button {...buttonProps}>
                    <TruckIcon size={18} className="mr-2" />
                    <span>Submit Shipment</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg space-y-4">
                <DialogHeader>
                    <DialogTitle>Confirm Shipping Details</DialogTitle>
                    <DialogDescription>
                        Review your shipping information before submitting your shipment.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid grid-cols-1 w-full gap-3">
                        {Object.entries(shipment).map(([key, value]) => {
                            if (omittedFields.includes(key)) return null
                            return (
                                <div key={key} className="grid grid-cols-5">
                                    <div className="col-span-2">
                                        <p className="text-sm text-neutral-500">
                                            {labelMapping[key]}
                                        </p>
                                    </div>
                                    <div className="col-span-3">
                                        <p className="text-sm font-medium">{value}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <DialogFooter className="sm:justify-end flex w-full gap-2 sm:gap-0">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                    <Link href="/order/complete" className="w-full sm:w-auto">
                        <Button type="button" className="w-full md:w-auto" onClick={onSubmit}>
                            Submit
                        </Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmationDialog
