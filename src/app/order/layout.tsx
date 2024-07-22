import Navbar from "@/components/Navbar"
import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
    title: "Thryft Ship - Order Shipment",
    description: "Create a new shipment for your order",
}

const OrderLayout = ({
    children,
}: Readonly<{
    children: ReactNode
}>) => {
    return (
        <div className="">
            <Navbar />
            {/* py-8 md:pt-16 */}
            <main className="h-full sm:min-h-screen flex">{children}</main>
        </div>
    )
}

export default OrderLayout
