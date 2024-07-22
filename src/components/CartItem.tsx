"use client"

import { CartProduct } from "@/lib/types"
import Image from "next/image"
import Counter from "./ui/counter"
import { useAtom } from "jotai"
import { cartData } from "@/store"
import { FormEvent, useEffect, useState } from "react"
import { ARBITRARY_MAX_QUANTITY } from "@/lib/utils"
import { useWindowSize } from "usehooks-ts"

interface ProductCardProps {
    product: CartProduct
}

const CartItem = ({ product }: ProductCardProps) => {
    const { id, image, name, description, quantity, price, style } = product
    const [, updateCart] = useAtom(cartData)
    const [productQty, setQuantity] = useState<number>(quantity)
    const { width = 0 } = useWindowSize()

    useEffect(() => {
        setQuantity(quantity)
    }, [quantity])

    const removeFromCart = (id: string, style: string) => {
        updateCart({ type: "remove", id, style })
        setQuantity(0)
    }

    const updateItemQuantity = (id: string, quantity: number) => {
        updateCart({ type: "update", id, quantity, style })
        setQuantity(quantity)
    }

    const parseAndValidateQuantity = (value: string) => {
        // If input is empty, reset to 0
        if (value === "") {
            return 0
        }

        const numericValue = parseInt(value, 10)

        if (isNaN(numericValue) || numericValue < 0) {
            return null
        }

        return Math.min(numericValue, ARBITRARY_MAX_QUANTITY)
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        const validatedQuantity = parseAndValidateQuantity(value)

        if (validatedQuantity !== null) {
            setQuantity(validatedQuantity)
        }
    }

    const handleInputBlur = (event: FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        const validatedQuantity = parseAndValidateQuantity(value)

        if (validatedQuantity !== null) {
            setQuantity(validatedQuantity)
            updateItemQuantity(id, validatedQuantity)
        } else {
            // Reset to previous quantity or handle invalid input as needed
            setQuantity(quantity)
        }

        if (validatedQuantity === 0) {
            removeFromCart(id, style)
        }
    }

    return (
        <div className="flex flex-col gap-4 pt-4">
            <div className="flex flex-col md:flex-row items-start gap-3">
                <div className="bg-neutral-500 relative rounded overflow-hidden w-36 h-24">
                    <Image src={image} alt={name} layout="fill" objectFit="cover" />
                </div>
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4">
                    <div>
                        <h5 className="font-medium text-base leading-6">{name}</h5>
                        <p className="text-xs text-neutral-500">{description}</p>
                        <p className="text-xs text-neutral-500 pt-0.5">
                            Style: <span className="font-medium">{style}</span>
                        </p>

                        {width >= 768 && (
                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex items-center gap-1">
                                    <p className="text-sm">Quantity:</p>
                                    <Counter
                                        count={productQty}
                                        onDecrease={() => updateItemQuantity(id, quantity - 1)}
                                        onIncrease={() => updateItemQuantity(id, quantity + 1)}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                        minimum={0}
                                        maximum={10}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-between w-full md:w-fit border-b pb-6 md:border-0 md:pb-0 border-neutral-200 text-right">
                        {width < 768 && (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <p className="text-sm">Quantity:</p>
                                    <Counter
                                        count={productQty}
                                        onDecrease={() => updateItemQuantity(id, quantity - 1)}
                                        onIncrease={() => updateItemQuantity(id, quantity + 1)}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                        minimum={0}
                                        maximum={10}
                                    />
                                </div>
                            </div>
                        )}
                        <div className="">
                            <p className="font-medium text-sm">${(price * quantity).toFixed(2)}</p>
                            {quantity > 1 && (
                                <p className="text-sm text-neutral-400">${price.toFixed(2)} each</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
