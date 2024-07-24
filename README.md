# Indian Agriculture Data Analysis

This project is a web application that analyzes and displays Indian agriculture data from 1950 to 2020. It provides insights into yearly crop production and averages for various crops over the specified period.

## Features
- Yearly Crop Production Analysis: Displays the crop with the maximum and minimum production for each year.
- Crop Averages: Shows the average yield and cultivation area for each crop from 1950 to 2020.
- Responsive Design: Ensures usability across different devices.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Mantine: A React component library for styling.
- Vite: A fast build tool for modern web projects.

## Project Structure
```
Indian-Agriculture-Analytics/
├── src/
│   ├── components/
│   │   ├── CropTable.tsx
│   │   ├── YearlyTable.tsx
│   ├── services/
│   │   ├── dataService.ts
│   ├── utils/
│   │   ├── dataAnalysis.ts
│   ├── App.css
│   ├── App.tsx
│   ├── data.ts
│   ├── main.tsx
│   ├── index.css
│   ├── vite-env.d.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
```

## Demo
Watch the demo video below to see the application in action:
![Demo GIF](https://github.com/user-attachments/assets/d56b2663-fdba-4a45-9fe7-6f06e0ec3e1c)



## Getting Started
### Prerequisites
Make sure you have the following installed:

- Node.js (>= 14.0.0)
- npm (>= 6.0.0) or yarn (>= 1.0.0)
### Installation
1. Clone the repository:
```bash
git clone https://github.com/TangoBeee/Indian-Agriculture-analytics.git
cd Indian-Agriculture-analytics
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the Application
To start the development server, run:
```bash
npm run dev
# or
yarn dev
```
Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Building for Production
To create a production build, run:
```bash
npm run build
# or
yarn build
```

The optimized build will be in the dist directory.

