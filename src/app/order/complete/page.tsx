import Image from "next/image"
import LogoPath from "../../../assets/Logo.png"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"
import Footer from "@/components/Footer"

const ShipmentCompletePage = () => {
    return (
        <div className="max-w-xl mx-auto text-center flex items-center flex-col px-6 h-full flex-1 pt-12 md:pt-16 min-h-screen">
            <Image src={LogoPath} width={72} height={72} alt="Thryft Ship Logo" />
            <h1 className="text-2xl lg:text-3xl font-semibold text-center pb-2 pt-4">
                Thanks for shopping with us!
            </h1>
            <p className="text-sm text-center lg:text-base text-neutral-500">
                Your order has been placed and will be shipped soon. You will be sent a confirmation
                and tracking number to your email.
            </p>

            <Link href="">
                <Button className="mt-12" variant="outline">
                    <span>Continue shopping</span>
                    <ChevronRightIcon size={18} className="ml-2" />
                </Button>
            </Link>

            <div className="text-sm text-center lg:text-base text-neutral-500 mt-auto pb-24">
                <p className="">Interested in selling your products?</p>
                <p className="">
                    Check out our{" "}
                    <span className="text-primary-indigo underline underline-offset-4">
                        <Link href="">seller shipment portal</Link>
                    </span>
                    .
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default ShipmentCompletePage
