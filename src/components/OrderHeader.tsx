"use client"

import { cartAtom } from "@/store"
import { useAtom } from "jotai"
import ProductsDialog from "./ProductsDialog"

interface OrderHeader {
    id: string
    count: number
}

const OrderHeader = ({ id }: OrderHeader) => {
    const [cartItems] = useAtom(cartAtom)

    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <div>
            <p className="text-sm text-neutral-500 pb-4">Order #{id}</p>
            <div className="flex justify-between items-center">
                <h1 className="text-xl lg:text-2xl font-medium">
                    {count} {count !== 1 ? "items" : "item"}
                </h1>
                <ProductsDialog />
            </div>
        </div>
    )
}

export default OrderHeader
