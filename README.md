# Streamify Dashboard 🎵📊

## Overview

This project is a **Music Streaming Analytics Dashboard** for a fictional service called **Streamify**. The dashboard displays key metrics, data visualizations, and insights into the platform's performance. It helps the management team track user activity, revenue, and content performance in a visually appealing and user-friendly interface.

## Features

### 1. **Key Metrics**
- **Total Users**: Displays the total number of registered users on the platform.
- **Active Users**: Shows the number of users who have streamed at least one song in the last 30 days.
- **Total Streams**: Represents the total number of song streams on the platform.
- **Revenue**: Displays the total revenue generated from subscriptions and advertisements.
- **Top Artist**: Highlights the artist with the most streams in the past 30 days.

### 2. **Data Visualizations**
- **User Growth Chart**: A line chart showing user growth (both total users and active users) over the past 12 months.
- **Revenue Distribution**: A pie chart that breaks down the sources of revenue (e.g., Subscriptions, Ads).
- **Top 5 Streamed Songs**: A bar chart that displays the top 5 most-streamed songs in the past 30 days.

### 3. **Data Table**
A table showing detailed information about recent streams:
- **Song Name**
- **Artist**
- **Date Streamed**
- **Stream Count**
- **User ID**

### 4. **Bonus Features**
- **Sorting and Filtering**: Allows users to sort the table by date or stream count and filter by artist or song name.
- **Chart Interactions**: Users can hover over points on the charts to see detailed data, and clicking on pie chart segments filters the data table by revenue source.

### 5. **Design & UX**
- Responsive design ensuring the dashboard looks great on all screen sizes.
- Built with **TailwindCSS** to maintain modern, clean visuals.
  
## Technical Details

### Tech Stack
- **Frontend**: React, TailwindCSS
- **Build Tool**: Vite
- **Charts**: Chart.js with react-chartjs-2

### Performance Optimization
- Lazy loading of components to improve initial load time.
- Memoization and code-splitting techniques used to optimize re-renders.

## Thought Process

1. **Planning & Design**: The project began with planning the structure of the dashboard, deciding which metrics, charts, and tables would provide the most useful insights to the management team.
2. **Component Structure**: I broke the dashboard into reusable React components, ensuring each part was modular and easy to maintain.
3. **Charting**: I used `Chart.js` because it provides powerful charting options and is highly customizable. The charts are interactive, allowing hover states and clicks for detailed insights.
4. **Responsiveness**: I focused on building a responsive design using TailwindCSS, ensuring that the dashboard adapts well to different devices and screen sizes.
5. **Mock Data**: Since no backend was required, I used hardcoded mock data that mimics real-world usage patterns to populate the dashboard.

## How to Run the Project

### Prerequisites
- **Node.js** and **npm** should be installed on your system.

### Steps to Run Locally

1.**Clone the Repository**:
   ```bash
   git clone https://github.com/Fenilm1/StreamifyDashboard.git
   ```
2.**Install Dependencies: Navigate into the project directory and install all dependencies**:
  ```bash
  npm install
  ```
3.**Run the Development Server: Start the development server to view the project in your local environment**:
```bash
  npm run dev
```
4.**Build for Production: If you want to generate an optimized production build**:
```bash
npm run build
```
5.**Deploy to GitHub Pages: If you want to deploy the app to GitHub Pages, you can use the following command**:
```bash
npm run deploy
```



**The Project is also deployed here**
https://Fenilm1.github.io/StreamifyDashboard/
