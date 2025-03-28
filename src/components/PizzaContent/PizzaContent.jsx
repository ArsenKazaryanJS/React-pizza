import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PizzaCard } from "../PizzaCard/PizzaCard";
import { fetchPizzasThunk } from "../../redux/slices/pizzasSlice";
import { useFilteredPizzas } from "../../hooks/useFilteredPizzas"; // Adjust the path as necessary

export const PizzaContent = () => {
    const dispatch = useDispatch();
    const {filteredPizzas} = useFilteredPizzas();
    

    useEffect(() => {
        dispatch(fetchPizzasThunk());
    }, [dispatch]);

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