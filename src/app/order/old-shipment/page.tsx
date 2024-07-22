import ShippingForm from "@/components/ShippingForm"

const THRYFTER_NAME = "thryfter"

const ShipmentPage = () => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <h1 className="text-2xl lg:text-3xl font-semibold text-center">
                    Thank you for purchasing <br /> from{" "}
                    <span className="text-primary-indigo">[{THRYFTER_NAME}]</span>
                </h1>
            </div>

            <div className="py-8">
                <h2 className="text-lg lg:text-xl font-semibold pb-1 lg:pb-2">
                    Your Shipping Information
                </h2>
                <p className="text-sm lg:text-base text-neutral-500">
                    Your Instagram Handle helps us match your address to your purchase. We will send
                    your shipment tracking information to your email.
                </p>
            </div>
            <ShippingForm />
        </div>
    )
}

export default ShipmentPage
