export interface Product {
    name: string
    price: number
    quantity: number
    style: string
    image: string
}

export interface ProductBase {
    id: string
    name: string
    price: number
    description: string
    image: string
    availableStyles: string[]
}

export interface ProductResponse extends ProductBase {
    style: string | null
    quantity: number | null
}

export interface CartProduct extends ProductBase {
    quantity: number
    style: string
}

export interface Shipment {
    instagramHandle: string
    email: string
    confirmEmail: string
    firstName: string
    lastName: string
    address1: string
    address2?: string
    city: string
    state: string
    zipcode: string
    // products: Product[]
}
