# 🚐 TravelTrucks — Campervan Rental Service

**TravelTrucks** is a modern web application for renting campervans, designed for travelers who value freedom, flexibility, and comfort. It delivers a seamless experience for browsing available vehicles, exploring detailed specifications, reading authentic reviews, and booking the perfect van for an unforgettable road trip.

---

## 🔗 Live Links

* 🌐 **Live Demo:** [TravelTrucks on Vercel](#)
* 📂 **Repository:** [GitHub Link](#)

---

## 🚀 Tech Stack

### 🧩 Core

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **UI Library:** React 19

### 📡 Data Management & Forms

* **State & Fetching:** TanStack Query v5 (React Query)
* **API Client:** Axios
* **Forms:** React Hook Form
* **Validation:** Yup

### 🎨 UI & Styling

* **Styling:** CSS Modules + Normalize.css
* **Carousels:** Swiper.js
* **Icons:** React Icons
* **Date Picker:** React Datepicker
* **Notifications:** React Hot Toast

---

## ✨ Key Features

### 🚐 Dynamic Catalog

Browse a wide range of campervans with smooth pagination and fast loading.

### 🔍 Advanced Filtering

Easily find the right vehicle by selecting:

* Equipment (AC, Kitchen, TV, etc.)
* Vehicle type (Alcove, Integrated, Van)

### 📄 Detailed Camper Pages

Each camper includes:

* High-quality image gallery
* Technical specs (length, tank capacity, fuel consumption)
* Full description

### ⭐ Review System

Read real feedback from other travelers:

* Star ratings
* Detailed comments

### 📅 Smart Booking

* User-friendly booking form
* Real-time validation
* Integrated calendar for date selection

### 🔎 SEO Optimization

* Dynamic metadata generation
* Improved search engine visibility for each camper page

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/vjosik/TravelTrucks.git
cd TravelTrucks
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:3000
```

---

## 📂 Project Structure

```
/app         → App Router pages, layouts, global styles  
/components  → Reusable UI components (BookingForm, Loader, Reviews, CamperFeatures, etc.)  
/lib         → API configuration and Axios instance  
/types       → Shared TypeScript interfaces  
/public      → Static assets and icons  
```

---

## 📡 API Integration

The application interacts with a backend service:

* `GET /campers` → Fetch all vehicles (with filters & pagination)
* `GET /campers/:id` → Get detailed camper info
* `GET /campers/:id/reviews` → Retrieve camper reviews
* `POST /campers/:id/booking-requests` → Submit booking request

---

## 🌍 Final Note

Built for explorers who believe the journey is just as important as the destination.

**Travel smart. Travel free. Travel with TravelTrucks. 🚐**
