import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../redux/slices/filterSlice";

export const useFilteredPizzas = (minPrice, maxPrice) => {
  const { filteredPizzas, categoryId, sortTypeId } = useSelector(
    (state) => state.filters
  );
  const { pizzas } = useSelector((state) => state.pizzas);
  const dispatch = useDispatch();

  const submitPrice = () => {
    // price filter
    const priceFilteredPizzas = pizzas.filter(
      (pizza) => pizza.price >= minPrice && pizza.price <= maxPrice
    );
    
    // aply all filters
    applyFilters(priceFilteredPizzas);
  };

  const applyFilters = (pizzasToFilter) => {
    // categori filter
    const newFilterArray = pizzasToFilter.filter((pizza) =>
      categoryId === 0 ? true : pizza.category === categoryId
    );

    // sort
    if (sortTypeId === 0) {
      newFilterArray.sort((a, b) => a.rating - b.rating);
    } else if (sortTypeId === 1) {
      newFilterArray.sort((a, b) => a.price - b.price);
    } else if (sortTypeId === 2) {
      newFilterArray.sort((a, b) => a.title.localeCompare(b.title));
    }

    dispatch(filterPizzas(newFilterArray));
  };

  useEffect(() => {
    applyFilters(pizzas);
  }, [categoryId, sortTypeId, pizzas, dispatch]);

  
  return {
    filteredPizzas: filteredPizzas.length > 0 ? filteredPizzas : pizzas,
    submitPrice,
  };
};