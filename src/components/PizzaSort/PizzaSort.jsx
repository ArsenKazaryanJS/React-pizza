import { useState } from "react";
import './pizzaSort.css';
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSortTypeId } from "../../redux/slices/filterSlice";

export const PizzaSort = () => {
  const dispatch = useDispatch()
  const sortTypeId = useSelector((state)=> state.filters.sortTypeId)
  const [open, setOpen] = useState(false);
  const sortArray = [
    { id: 0, name: 'популярности',sort:'rating' },
    { id: 1, name: 'цене', sort:'price', },
    { id: 2, name: 'поалфавиту', sort:'title' }
  ];
  

  return (
    <div className="sort">
      <div className="sort__label" onClick={() => setOpen(!open)}>
        <ChevronDown />
        <b>Сортировка по: {sortArray[sortTypeId].name} </b>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>{
              sortArray.map(({ id, name }) => ( 
                <li className={id === sortTypeId ? 'active' : ''} onClick={() => { dispatch(setSortTypeId(id)); setOpen(!open); }} key={id}>
                  {name}
                </li> ))
            }</ul>
        </div>
      )}
    </div>
  );
};