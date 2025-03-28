import React, { useState } from "react";
import "./priceRange.css";
import { useFilteredPizzas } from "../../hooks/useFilteredPizzas";

export const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1500); 
  const { submitPrice } = useFilteredPizzas(minPrice, maxPrice);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPrice();
  };

  return (
    <div className="price-range-slider">
      <form onSubmit={handleSubmit}>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="500"
            value={minPrice}
            className="slider"
            onChange={(e) => setMinPrice(+e.target.value)}
          />
          <input
            type="range"
            min="0"
            max="1500"
            value={maxPrice}
            className="slider"
            onChange={(e) => setMaxPrice(+e.target.value)}
          />
        </div>
        <div className="price-values">
          <span>Мин: ${minPrice}</span>
          <span>Макс: ${maxPrice}</span>
        </div>
        <button className="submit-button">Применить фильтр по цене</button>
      </form>
    </div>
  );
};