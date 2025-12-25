# Djembar Arafat - Personal Portfolio

<img width="1440" height="1024" alt="my cv - cover" src="https://github.com/user-attachments/assets/f46ff880-cd70-4053-bbef-75dcbc343475" />

A modern, high-performance personal portfolio website designed to showcase projects, skills, and professional certifications. Built with the latest web technologies including **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **Sanity CMS**.

## 🚀 Tech Stack

This project leverages a cutting-edge stack focused on performance, scalability, and developer experience.

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **CMS** | [Sanity.io](https://www.sanity.io/) (Headless CMS) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & [Styled Components](https://styled-components.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light Mode) |
| **Package Manager** | NPM |

## ✨ Key Features

* **Dynamic Content Management:** Integrated with Sanity CMS for easy updates of projects, blogs, and certifications without touching the code.
* **Responsive Design:** Fully responsive layout built with Tailwind CSS v4 mobile-first approach.
* **Dark/Light Mode:** Seamless theme switching supported by `next-themes`.
* **Smooth Animations:** Interactive UI elements powered by Framer Motion.
* **Interactive Carousel:** Project showcases utilizing `swiper` for touch-friendly sliding.
* **Optimized Performance:** Utilizing Next.js 15 Turbopack for fast development and optimized production builds.

## 🛠️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* Node.js (v20 or later recommended)
* NPM or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/portfolio-2.git](https://github.com/yourusername/portfolio-2.git)
    cd portfolio-2
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root directory and add your Sanity credentials:

    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the project:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🗂️ Project Structure

```bash
portfolio-2/
├── app/                  # Next.js App Router directories
├── components/           # Reusable UI components
│   ├── layout/           # Navbar, Footer, etc.
│   ├── theme/            # Theme toggle logic
│   └── ui/               # Small UI elements
├── constants/            # Static data and configuration
├── lib/                  # Library configurations (Sanity client, utils)
├── sanity/               # Sanity studio configuration and schemas
├── styles/               # Global styles
└── utils/                # Helper functions
