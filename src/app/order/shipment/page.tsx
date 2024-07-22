import Footer from "@/components/Footer"
import OrderHeader from "@/components/OrderHeader"
import OrderList from "@/components/OrderList"
import ShippingForm from "@/components/ShippingForm"

const THRYFTER_NAME = "thryfter"

const ShipmentPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full flex-1">
            <div className="order-2 lg:order-1 col-span-1 max-w-xl w-full mx-auto px-6 pt-12 md:pt-16">
                <div className="w-full flex justify-center">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-center">
                        Thank you for purchasing <br /> from{" "}
                        <span className="text-primary-indigo">[{THRYFTER_NAME}]</span>
                    </h1>
                </div>

                <div className="pt-12 pb-8">
                    <h2 className="text-lg lg:text-xl font-semibold pb-1 lg:pb-2">
                        Your Shipping Information
                    </h2>
                    <p className="text-sm lg:text-base text-neutral-500">
                        Your Instagram Handle helps us match your address to your purchase. We will
                        send your shipment tracking information to your email.
                    </p>
                </div>
                <ShippingForm />
                <div className="pt-16">
                    <Footer />
                </div>
            </div>
            <div className="order-1 lg:order-2 col-span-1 bg-neutral-50 w-full h-full px-6 pb-12 pt-12 md:pt-16">
                <div className="max-w-xl mx-auto w-full sticky top-12">
                    <OrderHeader id="123456789" count={1} />

                    <div className="flex flex-col gap-4 pt-4">
                        <OrderList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipmentPage
