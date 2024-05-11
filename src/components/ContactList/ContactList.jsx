import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getVisibleContacts = (items, filterName) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  );
};

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(items, filterName);

  return (
    <div>
      <ul className={css.list}>
        {visibleContacts.map((item) => {
          return (
            <li className={css.item} key={item.id}>
              <Contact item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;
