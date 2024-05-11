import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

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

// import { useSelector } from "react-redux";
// import { selectFilterContacts } from "../../redux/contactsSlice";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// const ContactList = () => {
//   const visibleContacts = useSelector(selectFilterContacts);

//   return (
//     <div>
//       <ul className={css.list}>
//         {visibleContacts.map((item) => {
//           return (
//             <li className={css.item} key={item.id}>
//               <Contact item={item} />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };
// export default ContactList;
