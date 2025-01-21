import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./TalkToUsForm.scss";

const TalkToUsForm = () => {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters long"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    comment: Yup.string()
      .required("Comment is required")
      .min(5, "Comment must be at least 5 characters long"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted with values:", values);
    resetForm();
  };

  return (
    <div className="contact-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="contact-form__form">
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            className="contact-form__input"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="contact-form__error"
          />

          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email Address"
            className="contact-form__input"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="contact-form__error"
          />

          <Field
            as="textarea"
            id="comment"
            name="comment"
            placeholder="Your Message"
            className="contact-form__textarea"
          />
          <ErrorMessage
            name="comment"
            component="div"
            className="contact-form__error"
          />

          <button type="submit" className="contact-form__button">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default TalkToUsForm;
