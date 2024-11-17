import React from "react";
import { render, screen } from "@testing-library/react";
import CurrencyItem from "./CurrencyItem";


test("renders Currency Item correctly", () => {
  const currency = {
    currency: "USD",
    nameI18N: "US Dollar",
    exchangeRate: { buy: 110.5, sell: 109.5 },
  };

  render(<CurrencyItem currency={currency} />);

  // Check if the currency name is displayed
  expect(screen.getByText("US Dollar")).toBeInTheDocument();

  // Check if the currency code is displayed in uppercase
  expect(screen.getByText("USD")).toBeInTheDocument();

  // Check if both exchange rates are displayed
  expect(screen.getByText(/Exchange Rate \(Buy\): 110.5 KES/)).toBeInTheDocument();
  expect(screen.getByText(/Exchange Rate \(Sell\): 109.5 KES/)).toBeInTheDocument();

  // Check if the flag image is rendered with the correct alt text and mocked src
  /**const flagImage = screen.getByAltText("US Dollar");
  expect(flagImage).toBeInTheDocument();
  expect(flagImage.src).toContain("mocked-image-path");*/
});
