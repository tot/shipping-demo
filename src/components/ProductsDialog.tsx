"use client"

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
import { ProductResponse, Shipment } from "@/lib/types"
import { useEffect, useState } from "react"
import { fetchProducts } from "@/lib/utils"
import AddProductCard from "./AddProductCard"

interface ProductsDialogProps {
    buttonProps?: React.ComponentProps<typeof Button>
}

const ProductsDialog = ({ buttonProps }: ProductsDialogProps) => {
    const [products, setProducts] = useState<ProductResponse[]>([])

    useEffect(() => {
        const data = fetchProducts()
        setProducts(data)
    }, [])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" {...buttonProps}>
                    <p>Add items to order</p>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl w-full space-y-4">
                <DialogHeader>
                    <DialogTitle>Add items</DialogTitle>
                    <DialogDescription>Select items to add to your shipment </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[24rem] md:max-h-[48rem] overflow-y-auto">
                    {products.map((product: ProductResponse) => (
                        <AddProductCard key={product.id} product={product} />
                    ))}
                </div>
                <DialogFooter className="sm:justify-end flex w-full gap-2 sm:gap-0">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ProductsDialog
