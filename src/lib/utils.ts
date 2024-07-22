import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const fetchProducts = () => {
    return [
        {
            id: "1",
            price: 100.0,
            image: "https://sofontsy.com/cdn/shop/products/i-have-a-hero-i-call-him-dad-svg-cute-file-fathers-day-retro-t-shirt-design-dad-sublimation-png-fathers-day-retro-vintage-t-shirt-design-fathers-day-clip-artdad-svg-bundl-979828_large.jpg?v=1686667072",
            name: "Vintage T-Shirt",
            description: "Upcycled vintage t-shirt designed by local artist",
            quantity: null,
            style: null,
            availableStyles: ["S", "M", "L", "XL"],
        },
        {
            id: "2",
            price: 50.0,
            image: "https://static1.squarespace.com/static/53a20827e4b0c1bc4487322a/54b08211e4b0149702a24bed/65493f78458b7e1d925f7947/1699299293024/IMG_6244%2B2.jpg?format=1500w",
            name: "Handmade Candle",
            description: "Candle made with soy wax and essential oils",
            quantity: null,
            style: null,
            availableStyles: ["Citrus Scent", "Strawberry Scent", "Mint Scent"],
        },
    ]
}

export const ARBITRARY_MAX_QUANTITY = 10
