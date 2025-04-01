# Nayan Studio Website
This repository contains the source code for the Nayan Studio website, a portfolio and client interaction platform for a photography studio. The website is designed to showcase the studio's work, including galleries, stories, and testimonials, while also providing an inquiry form for potential client

# Key Features

## Home Page:
- Highlights the studio's tagline and featured stories.
- Includes dynamic image sliders showcasing the studio's work.

## Gallery Page:
- Displays categorized photo galleries with responsive sliders.

## Stories Page:
- Lists real-life stories with detailed pages for each story.
- Includes "like" and "share" functionality for user engagement.

## Inquiry Page:
- Allows users to submit event inquiries via a form.
- Includes form validation and sends inquiry details via email.

## Testimonials Page:
- Displays client testimonials in a visually appealing layout.

## Not Found Page:
- Custom 404 page for invalid routes.

## Real-Time Updates:
- Like counts are updated in real-time using Socket.IO.

## Responsive Design:
- Fully responsive for mobile, tablet, and desktop devices.

## Smooth Navigation:
- Includes a "Scroll to Top" button for better user experience.
- Navigation menu adapts for mobile and desktop views.

## Welcome Screen:
- Displays a welcome screen for first-time visitors, stored in localStorage.

# Technologies Used

## Frontend:
- **React**: Component-based architecture for building the UI.
- **React Router**: For seamless navigation between pages.
- **React Slick**: For image sliders.
- **React Toastify**: For user notifications.
- **CSS**: Modularized and responsive styling.

## Backend:
- **Express.js**: REST API for handling inquiries and likes.
- **Socket.IO**: Real-time updates for like counts.
- **Nodemailer**: Sends inquiry details via email.
- **EJS**: Templating engine for email content.

## Database:
- **MongoDB**: Stores inquiries and post-like data.
- **Mongoose**: Schema-based modeling for MongoDB.

## Deployment:
- Backend serves the React app in production.
- CORS configured for both local and production environments.
