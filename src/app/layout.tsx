import type { Metadata } from "next"
import localFont from "next/font/local"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const circular = localFont({
    src: [
        {
            path: "../assets/fonts/CircularStd-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../assets/fonts/CircularStd-Book.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/CircularStd-Medium.woff2",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-circular",
})

export const metadata: Metadata = {
    title: "Thryft Ship",
    description: "Easy shipping for Instagram sellers",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${circular.className}`}>
                <Toaster position="bottom-right" />
                {children}
            </body>
        </html>
    )
}
