import { PizzaCategories } from "../../components/PizzaCategories/PizzaCategories";
import { PizzaContent } from "../../components/PizzaContent/PizzaContent";
import { PizzaSort } from "../../components/PizzaSort/PizzaSort";

export const Home = () => {
    return (
        <>
            <div className="content__top">
                <PizzaCategories/>
                <PizzaSort />
            </div>
            <PizzaContent />
        </>
    );
};