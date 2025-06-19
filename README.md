# 📦 React E‑commerce Storefront

A faux storefront application built with React that fetches product data from the Fake Store API. This project provides a clean, functional shopping experience suitable for demonstration and learning purposes.

---

## 🚀 Features

- **Product Listing**  
  Retrieves and displays a catalog of products from the Fake Store API, including images, titles, prices, and descriptions.

- **Product Details**  
  Users can click a product to view its detailed information on a dedicated page.

- **Shopping Cart**  
  Users can add items to a cart, view cart contents, adjust quantities, and see subtotals.

- **API Integration**  
  All product data is fetched dynamically via the Fake Store API.

- **React-Based Architecture**  
  Utilizes React components and hooks with client-side routing for seamless navigation.


---

## 🗂️ Project Structure

```
public/         // Static assets (images, fonts, index.html)
src/
  ├── components/   // Reusable UI components (e.g. Header, Footer, Catalogue)
  ├── pages/        // Main screens/views (e.g. Home, Product, Cart)
  ├── App.js        // Core app layout and routing
  └── index.js      // React application entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or Yarn

### Setup & Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/myles-reid/ecommerce.git
   cd ecommerce
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   _(or `yarn install`)_
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser:
   ```
   http://localhost:3000
   ```

---

## 🧪 Available Scripts

| Command         | Description                                             |
|-----------------|---------------------------------------------------------|
| `npm start`     | Run the app in development mode (with hot reload)       |
| `npm test`      | Launches the test runner (if configured)                |
| `npm run build` | Builds a production-ready bundle in the `build/` folder |

---

## 🛠️ Technologies & Libraries

- **React** - component-driven UI library
- **React Router** - client-side routing
- **Axios** or native `fetch` - for API requests
- **Fake Store API** - source for product data
- **CSS** - styling (custom or frameworks if used)
- **NPM** - numerous packages to assist with styling

---

## Challenges

These items are challenges we faced

- Data management
- Reducing API calls
- Proper Filtering of items
- Scrolling to specific locations from another component

---

## 👥 Contributors

- Myles Reid -- [@myles-reid](https://github.com/myles-reid)
- Rahaf Ayn Kraie -- [@Rahaf-Ayn-Kraie](https://github.com/Rahaf-Ayn-Kraie)
- Gurjashan Singh -- [@Guri204](https://github.com/Guri204)
- Fabian Mendoza -- [@femo-dev](https://github.com/femo-dev)

---

