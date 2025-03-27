import './pizzaCategories.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId} from "../../redux/slices/filterSlice";

export const PizzaCategories = () => {
  const {categoryId,categories} = useSelector((state) => state.filters);
  const dispatch = useDispatch();


  return (
    <div className="categories">
      <ul>
        {
          categories.map(({ id, name }) => ( 
            <li key={id} onClick={() => dispatch(setCategoryId(id))} className={categoryId === id ? 'active' : ''}>
              {name}
            </li>
          ))
        }
      </ul>
    </div>
  );
};
