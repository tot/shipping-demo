"use client"

import { useAtom } from "jotai"
import CartItem from "./CartItem"
import { cartAtom, cartTotalAtom } from "@/store"

const OrderList = () => {
    const [cartItems] = useAtom(cartAtom)
    const [cartTotal] = useAtom(cartTotalAtom)

    return (
        <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
                <CartItem key={`${item.id}-${item.name}-${item.style}`} product={item} />
            ))}

            {cartItems.length === 0 && (
                <div className="flex justify-center items-center h-32">
                    <p className="text-base text-neutral-500">Your cart is empty</p>
                </div>
            )}

            {cartItems.length > 0 && (
                <div className="flex flex-col gap-4 pt-4">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-neutral-500">Subtotal</p>
                        <p className="text-sm font-medium">${cartTotal.toFixed(2)}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-sm text-neutral-500">Shipping</p>
                        <p className="text-sm font-medium">$0.00</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-sm text-neutral-500">Estimated Tax</p>
                        <p className="text-sm font-medium">$0.00</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p className="text-sm text-neutral-500">Total</p>
                        <p className="text-sm font-medium">${cartTotal.toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderList
