import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .trim()
    .min(7, "Too Short!")
    .max(15)
    .required("Required!"),
});

const ContactForm = () => {
  const nameId = nanoid();
  const numberId = nanoid();

  const values = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nameId,
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={values}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <label htmlFor={nameId}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameId}
              placeholder="Rosie Simpson"
            ></Field>
            <ErrorMessage className={css.err} name="name" component="span" />
          </div>

          <div className={css.inputWrapper}>
            <label htmlFor={numberId}>Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberId}
              placeholder="111-11-11"
            ></Field>
            <ErrorMessage className={css.err} name="number" component="span" />
          </div>

          <div className={css.btnWrapper}>
            <button className={css.btn} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
