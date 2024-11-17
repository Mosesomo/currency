# Currency Exchange Rates App

Welcome to the Currency Exchange Rates App! This React-based web application provides an easy-to-use interface for searching and exploring various currency exchange rates. With a responsive design and search functionality, it’s perfect for financial enthusiasts, travelers, or anyone curious about currency data.

## Features

- **Dynamic Currency Data**: Displays exchange rates fetched from `fx.json`
- **Search Functionality**: Easily find specific currencies using the integrated search bar with a stylish icon
- **Responsive Design**: Optimized for desktop and mobile devices
- **Sticky Header**: A convenient header with a search bar that stays visible during scrolling.
- **Clean UI**: Clean design with modern React components and Tailwind CSS styling

## Demo
![image](https://github.com/user-attachments/assets/42a7acd2-20b5-4475-8946-4a2ae950fa9b)



## Technologies Used
### Frontend
- **React**: For building dynamic UI components.
- **Tailwind CSS**: or fast and responsive styling
- **React Icons**: To include beautiful icons effortlessly.

### Data
- **JSON file(fx.json)**: Contains the currency exchange data.


## Getting Started

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mosesomo/currency
   cd currency

2. **Install dependancies**:
    ```bash
    npm install

3. **Start the development server**:
    ```bash
    npm run dev

4. **Open your browser and navigate to**
    ```arduino
    http://localhost:5173


## Project Structure

├── public/
├── src/
│   ├── assets/
│   │   └── flags/
│   │       ├── us.png          // Flag image for USD (for example)
│   ├── components/
│   │   ├── CurrencyList.jsx    // Displays the list of currencies
│   │   ├── CurrencyItem.jsx    // New component to display a single currency
│   │   └── CurrencyItem.test.jsx // Test file for CurrencyItem component
│   ├── data/
│   │   └── fx.json             // JSON file with currency exchange rates
│   ├── App.jsx                 // Main application component
│   ├── index.jsx               // Entry point
├── tailwind.config.js          // Tailwind CSS configuration
├── package.json
└── README.md


## How it works

1. The application loads exchange rate data from  `fx.json` when it starts.
2. **Users can search for currencies using the search bar**:
    - As users type, the search term updates the displayed list.
    - The current search term is reflected in the URL hash, allowing easy sharing of filtered views.
3. The currency list dynamically updates based on the search query
