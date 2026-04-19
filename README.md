🚐 TravelTrucks — Campervan Rental Service
TravelTrucks is a modern web application for renting campervans, designed for travelers who value freedom and comfort. The application provides a seamless experience for browsing a catalog of vehicles, exploring detailed specifications, reading user reviews, and booking the perfect van for an unforgettable road trip.

🔗 Live Links
Live Demo: TravelTrucks on Vercel

Repository: GitHub Link

🚀 Tech Stack
Core
Framework: Next.js 16 (App Router)

Language: TypeScript

UI Library: React 19

Data Management & Forms
State & Fetching: TanStack Query v5 (React Query)

API Client: Axios

Form Handling: React Hook Form

Validation: Yup

UI Components & Styling
Styling: CSS Modules & Normalize.css

Carousels: Swiper.js

Icons: React Icons

Date Picker: React Datepicker

Notifications: React Hot Toast

✨ Key Features
Dynamic Catalog: A comprehensive list of campervans with pagination support.

Advanced Filtering: Search by equipment (AC, Kitchen, TV, etc.) and vehicle type (Alcove, Integrated, Van).

Detailed Camper Pages: View high-quality image galleries, technical specifications (length, tank capacity, consumption), and detailed descriptions.

Review System: Access genuine feedback from other travelers, including star ratings and detailed comments.

Smart Booking: An intuitive booking form with real-time validation and a calendar for date selection.

SEO Optimized: Dynamic metadata generation for individual camper pages to ensure high search engine visibility.

🛠️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/vjosik/TravelTrucks.git
cd TravelTrucks
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser.

📂 Project Structure
/app — App Router pages, layouts, and global styles.

/components — Modular UI components (BookingForm, Loader, Reviews, CamperFeatures, etc.).

/lib — API configuration and Axios instance.

/types — Shared TypeScript interfaces for Campers, Reviews, and API responses.

/public — Static assets and global icons.

📡 API Integration
The app connects to a dedicated backend service to handle:

GET /campers — List all vehicles with filters.

GET /campers/:id — Specific vehicle details.

GET /campers/:id/reviews — Fetch reviews for a specific camper.

POST /campers/:id/booking-requests — Submit a new booking.

Developed for explorers who believe the journey is just as important as the destination. 🌍🚐