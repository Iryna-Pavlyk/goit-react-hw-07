import { useSelector } from "react-redux";
import { selectFilterContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilterContacts);

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
