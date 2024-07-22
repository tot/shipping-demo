# Thryft Ship

## Getting Started

1. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. You should then be redirected to [http://localhost:3000/order/shipment](http://localhost:3000/order/shipment). If you are not automatically redirected, open the link with your browser.

4. Once on the shipment page, fill out the form and add products to your cart. After the form is complete and the cart is populated, press the "Submit Shipment" button to review the information entered in the form.

5. Once ready to submit order, press the "Submit" button in the dialog to be redirected to the completed order page.

## Frontend Stack

-   Next.js
-   TailwindCSS
-   ShadCN UI

## Libraries Used

-   Opted to use ShadCN UI and TailwindCSS for rapid development while still having high customizability and control over components. Small footprint from adding the ShadCN-UI since I only added the components I needed.
-   React-Hook-Form and Zod: Provides robust API for building forms with comprehensive input validation. Used it to define form schemas and to ensure the information was valid
-   React-hot-toast: Library that allowed me to easily creat toast notifications that let users know when they added items to their cart
-   UseHooks-TS: Used to get the viewport dimensions for making the app responsive. Could have copied out the utilities that I used instead of adding the entire library as a new dependency, but I chose to add the library due to time constraints.
-   Jotai: State management library that allowed allowed for quicker development compared to using React Context. Also provides better performance and developer experience.

## Future explorations

-   Fetch products from API
-   Automatically load user information from the backend
    -   Use accounts for this
-   Validate and autofill address information using Google Maps API or similar service
-   Implement payment information step
-   Possibly add phone number too for shipping information
-   Add skeleton loaders and other similar components to indicate fetching and loading states
-   Adjust components to account for rendering paradigm used (whether SSR or CSR) and how the pages are hydrated
    -   Server vs client components
-   Implement search bar to find products when adding to cart

## Design Considerations

-   Changed Products input to be a dedicated view because I think it's better UX to let users view the products they want to add and pick the style and quantity using dedicated controls.
-   Removed graphics on the side because it would've been difficult to make them responsive, and they didn't add to the UI in a way that would justify the effort of adding them
