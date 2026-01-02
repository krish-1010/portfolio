# 🚀 Krishna M | Personal Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Welcome to my personal portfolio website source code! This project serves as my digital identity, showcasing my work as a Software Engineer, physics simulations, and teaching resources.

It includes a dedicated **"Link in Bio"** page (`/links`), eliminating the need for third-party tools like Linktree.

**🔗 Live Demo:** [mkrishna.dev](https://www.mkrishna.dev)

---

## ✨ Features

* **⚡ Blazing Fast:** Migrated from Create-React-App to **Vite** for instant server starts and optimized builds.
* **🎨 Responsive Design:** Custom CSS with a dark, space-themed aesthetic.
* **🔗 Integrated Link Tree:** A standalone `/links` route optimized for mobile social bios (Instagram/LinkedIn).
* **📈 Analytics:** Integrated **Google Analytics 4** (via `react-ga4`) with environment variable protection.
* **🔍 SEO Optimized:** Dynamic meta tags and Open Graph previews using `react-helmet-async`.
* **🖱️ Smooth Navigation:** Single-page scroll navigation with active state detection.

---

## 🛠️ Tech Stack

* **Frontend:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Routing:** React Router v6
* **Analytics:** React GA4
* **SEO:** React Helmet Async
* **Icons:** React Icons
* **Deployment:** Vercel

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
* Node.js (v18 or higher recommended)
* npm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/krish-1010/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**
    Create a `.env` file in the root directory and add your Google Analytics ID (optional for local dev):
    ```env
    VITE_GA_ID=G-XXXXXXXXXX
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 📂 Project Structure

```bash
src/
├── components/      # Reusable UI components (Hero, Navbar, Links, SEO)
├── imgs/            # Static assets and profile images
├── App.jsx          # Main routing logic and Layout structure
├── main.jsx         # Entry point (Providers: Helmet, StrictMode)
└── index.css        # Global styles and variables
```

## 📬 Connect with Me

* **LinkedIn:** [Krishna M](https://www.linkedin.com/in/mkrishna10/)
* **Hashnode:** [blog.mkrishna.dev](https://blog.mkrishna.dev)
* **Portfolio:** [mkrishna.dev](https://mkrishna.dev)

<br />

<p align="center">
  Made with ⚛️ and ☕ by Krishna M.
</p>
