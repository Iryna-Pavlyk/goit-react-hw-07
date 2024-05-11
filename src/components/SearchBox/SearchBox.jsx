import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleFilter = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Rosie Simpson"
      />
    </div>
  );
};

export default SearchBox;
