# SkinBuy – Beauty & Skincare E‑Commerce Platform

## About SkinBuy

SkinBuy is a dedicated cosmetics e-commerce platform designed to bring beauty enthusiasts a curated selection of skincare, makeup, and personal care products from trusted brands. By focusing exclusively on cosmetics, it offers an uncluttered shopping environment where users can easily search by keyword, filter by color, brand, price, and availability, and compare similar products side-by-side. 

## Key Features

* **Product Catalog**: Browse and filter items by category (beauty, skincare, clothing, electronics), brand, price, and ratings.
* **User Authentication**: Secure signup and login flows, including provider/OAuth support.
* **Cart & Checkout**: Add products to cart, apply coupons, select shipping options, and complete purchases with eSewa, Stripe, PayPal, or Khalti.
* **Order Management**: View order history, track shipment status, and reorder past purchases.
* **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices.

## Aims and Objectives

* **Streamline Online Shopping**: Provide a user‑friendly interface for discovering and purchasing beauty products.
* **Flexible Payments**: Integrate multiple popular gateways for local and international customers.
* **Open‑Source Template**: Offer a modular codebase for developers to customize and extend.
* **Scalable Backend**: Use MongoDB and Node.js for high performance and easy horizontal scaling.
*** Unified Shopping Platform:** Provide a one-stop shop for beauty, fashion, and electronics, simplifying the user journey.

## Technology Stack

| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Frontend    | Next.js (React), Tailwind CSS |
| Backend     | Node.js, Express.js, Mongoose |
| Database    | MongoDB                       |
| State Mgmt. | Redux Toolkit (RTK Query)     |
| Payments    |  Stripe, Cash On Delivery |
| Design      | Figma                         |

## How to Use the Code

1. **Clone the Repositories**

   ```bash
   git clone https://github.com/SumiSushmA/SkinBuy_Backend.git
   git clone https://github.com/SumiSushmA/SkinBuy_Frontend.git
   ```

2. **Configure Environment Variables**

   * **Backend**: Create a `.env` in `SkinBuy_Backend/`:

     ```ini
     MONGO_URI=mongodb://127.0.0.1:27017/SkinBuy
     PORT=5000
     JWT_SECRET=your_jwt_secret_here
     ```
   * **Frontend**: Create a `.env.local` in `SkinBuy_Frontend/`:

     ```ini
     NEXT_PUBLIC_API_BASE_URL=http://localhost:7000
     ```

3. **Install Dependencies**

   ```bash
   # Backend
   cd SkinBuy_Backend && npm install

   # Frontend
   cd SkinBuy_Frontend && npm install
   ```

4. **Run the Application**

   ```bash
   # Start backend server
   cd SkinBuy_Backend
   npm start

   # Start frontend dev server
   cd SkinBuy_Frontend
   npm run dev
   ```

## Conclusion

SkinBuy delivers a modern, extensible e‑commerce experience spanning beauty. Contributions are welcome—feel free to open issues or PRs to enhance features, performance, and integrations.

## Repositories

* **Backend**: https://github.com/SumiSushmA/skinbuy_e-commerce_backend.git


