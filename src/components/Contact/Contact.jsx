import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { MdPeopleAlt, MdOutlinePhoneInTalk } from "react-icons/md";
import css from "./Contact.module.css";

const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <div>
        <h2>
          <MdPeopleAlt color="#2196f3" size={22} />
          {name}
        </h2>
        <p className={css.text}>
          <MdOutlinePhoneInTalk color="#2196f3" size={22} />
          {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
