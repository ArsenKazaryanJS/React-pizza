import { PizzaCategories } from "../../components/PizzaCategories/PizzaCategories";
import { PizzaContent } from "../../components/PizzaContent/PizzaContent";
import { PizzaSort } from "../../components/PizzaSort/PizzaSort";
import { PriceRangeSlider } from "../../components/PriceRange/PriceRange";

export const Home = () => {
    return (
        <>
            <div className="content__top">
                <PizzaCategories/>
                <PizzaSort />
                <PriceRangeSlider/>

            </div>
            <PizzaContent />
        </>
    );
};