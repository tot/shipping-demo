"use client"

import { CartProduct, ProductResponse } from "@/lib/types"
import Image from "next/image"
import { Button } from "./ui/button"
import { FormEvent, useState } from "react"
import { Toggle } from "./ui/toggle"
import { useAtom } from "jotai"
import { cartData } from "@/store"
import Counter from "./ui/counter"
import { ARBITRARY_MAX_QUANTITY } from "@/lib/utils"
import toast from "react-hot-toast"

interface AddProductCardProps {
    product: ProductResponse
}

const AddProductCard = ({ product }: AddProductCardProps) => {
    const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
    const [quantity, setQuantity] = useState<number>(1)

    const [, updateCart] = useAtom(cartData)

    const handleSelectStyle = (style: string) => {
        setSelectedStyle(style)
    }

    const handleSetQuantity = (value: number) => {
        setQuantity(value)
    }

    const addItemToCart = (item: ProductResponse) => {
        if (!selectedStyle || quantity == null) return

        const newItem: CartProduct = {
            ...item,
            style: selectedStyle,
            quantity,
        }

        updateCart({ type: "add", item: newItem, quantity, style: selectedStyle })
        toast.success("Added item to cart!")
    }

    const removeFromCart = (id: string, style?: string) => {
        if (!style) {
            updateCart({ type: "remove", id })
            return
        }

        updateCart({ type: "remove", id, style })
    }

    const updateItemQuantity = (id: string, quantity: number, style: string | null) => {
        if (!style) return
        updateCart({ type: "update", id, quantity, style })
    }

    // const updateItemStyle = (id: string, style: string) => {
    //     updateCart({ type: "update", id, style })
    // }

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
            updateItemQuantity(product.id, validatedQuantity, selectedStyle)
        } else {
            // Reset to previous quantity or handle invalid input as needed
            setQuantity(quantity)
        }

        if (validatedQuantity === 0 && selectedStyle) {
            removeFromCart(product.id, selectedStyle)
        }
    }

    return (
        <div
            key={product.id}
            className="col-span-1 p-4 border border-neutral-200 hover:border-neutral-500 rounded flex flex-col">
            <div className="w-full flex justify-center">
                <Image src={product.image} alt={product.name} width={100} height={100} />
            </div>
            <p className="text-sm font-medium pt-4">{product.name}</p>
            <p className="text-sm text-neutral-500 pt-1">{product.description}</p>

            <p className="font-medium text-sm pt-4">Select a style:</p>
            <div className="flex flex-wrap whitespace-nowrap flex-row gap-1 pt-1">
                {product.availableStyles.map((style) => (
                    <div key={style} className="col-span-1">
                        <Toggle
                            type="button"
                            variant="outline"
                            size="sm"
                            className="h-6 px-2 text-xs"
                            onPressedChange={() => handleSelectStyle(style)}
                            pressed={selectedStyle === style}>
                            {style}
                        </Toggle>
                    </div>
                ))}
            </div>

            <div className="mt-auto">
                <div className="flex items-center justify-between py-4">
                    <p className="font-medium text-sm">Quantity:</p>
                    <Counter
                        count={quantity}
                        onDecrease={() => handleSetQuantity(quantity - 1)}
                        onIncrease={() => handleSetQuantity(quantity + 1)}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        minimum={0}
                        maximum={ARBITRARY_MAX_QUANTITY}
                    />
                </div>

                <Button
                    className="w-full"
                    size="sm"
                    disabled={selectedStyle === null || !quantity}
                    onClick={() => addItemToCart(product)}>
                    Add to cart
                </Button>
            </div>
        </div>
    )
}

export default AddProductCard
