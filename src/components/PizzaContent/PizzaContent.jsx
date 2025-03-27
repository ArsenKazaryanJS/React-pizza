import { useSelector, useDispatch } from "react-redux";
import { PizzaCard } from "../PizzaCard/PizzaCard";
import { useEffect } from "react";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";
import { filterPizzas } from "../../redux/slices/filterSlice";

export const PizzaContent = () => {
    const { filteredPizzas, categoryId, sortTypeId } = useSelector((state) => state.filters);
    const {pizzas} = useSelector((state) => state.pizzas); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas()); 
    }, [dispatch]);

    
    useEffect(() => {
        //categori filter
        const newFilterArray = pizzas.filter((pizza) => 
            categoryId === 0 ? true : pizza.category === categoryId
        );

        //sort
        if(sortTypeId === 0){
            newFilterArray.sort((a, b) => a.rating - b.rating)}
         else if (sortTypeId === 1) {
            newFilterArray.sort((a, b) => a.price - b.price);
        } else if (sortTypeId === 2) {
            newFilterArray.sort((a, b) => a.title.localeCompare(b.title));
        }
        dispatch(filterPizzas(newFilterArray));
    }, [categoryId, sortTypeId, pizzas, dispatch]);

    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {filteredPizzas.map((obj) => (
                    <PizzaCard key={obj.id} {...obj} />
                ))}
            </div>
        </>
    );
};