import { CartProduct } from "@/lib/types"
import { atom } from "jotai"

export const cartAtom = atom<CartProduct[]>([])
export const cartTotalAtom = atom<number>((get) =>
    get(cartAtom).reduce((acc, item) => acc + item.price * item.quantity, 0)
)
export const cartData = atom(
    // Getter function: Returns the current state of the cartAtom
    (get) => get(cartAtom),

    // Setter function: Allows adding, removing, and updating items in the cart
    (
        _,
        set,
        action: {
            type: "add" | "remove" | "update"
            item?: CartProduct
            id?: string
            quantity?: number
            style?: string
        }
    ) => {
        set(cartAtom, (prevCart) => {
            switch (action.type) {
                case "add": {
                    // Adds the item of the style to the cart if it's not already present
                    if (
                        action.item &&
                        action.quantity != null &&
                        !prevCart.find(
                            (cartItem) =>
                                cartItem.id === action.item?.id &&
                                cartItem.style === action.item.style
                        )
                    ) {
                        return [...prevCart, { ...action.item, quantity: action.quantity }]
                    }

                    // If the item with the same style is already in the cart, the quantity is updated
                    if (
                        action.item &&
                        action.quantity != null &&
                        prevCart.find(
                            (cartItem) =>
                                cartItem.id === action.item?.id &&
                                cartItem.style === action.item.style
                        )
                    ) {
                        console.log("updating quantity")
                        return prevCart.map((cartItem) => {
                            if (
                                cartItem.id === action.item?.id &&
                                cartItem.style === action.item.style &&
                                cartItem.quantity != null &&
                                action.quantity != null
                            ) {
                                console.log(cartItem.quantity + action.quantity)
                                return {
                                    ...cartItem,
                                    quantity: cartItem.quantity + action.quantity,
                                }
                            }
                            return cartItem
                        })
                    }

                    return prevCart
                }
                case "remove": {
                    // Removes the item from the cart by id
                    return prevCart.filter(
                        (cartItem) => cartItem.id !== action.id && cartItem.style !== action.style
                    )
                }
                case "update": {
                    // Updates the item's quantity in the cart by id and style
                    return (
                        prevCart
                            .map((cartItem) => {
                                if (cartItem.id === action.id && cartItem.style === action.style) {
                                    // Removes the item from the cart if the quantity is set to 0
                                    if (action.quantity === 0) {
                                        return null
                                    }

                                    return {
                                        ...cartItem,
                                        quantity: action.quantity ?? cartItem.quantity,
                                    }
                                }
                                return cartItem
                            })
                            // Type assertion to remove null values from the array
                            .filter((cartItem) => cartItem != null) as CartProduct[]
                    )
                }
                default:
                    return prevCart
            }
        })
    }
)
