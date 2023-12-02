import { useState } from "react";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [nameField, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setComment(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let errorMessage = '';

    switch (true) {
      case !validateEmail(email):
        errorMessage = 'Email is invalid.';
        break;
      case !nameField:
        errorMessage = 'Please enter a name.';
        break;
      case !comment:
        errorMessage = 'Please enter a message.'
        break;
      default:
        setSuccessMessage('Thank you! I will be in touch with you shortly.')
        setEmail('');
        setName('');
        setComment('');
        setTimeout(() => {
          setSuccessMessage('')
        }, 5000);
        break;
    }

    setErrorMessage(errorMessage);
  };

  return (
    <div className="adjust-height">
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            value={nameField}
            onChange={handleInputChange}
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={handleInputChange}
            name="email"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            value={comment}
            onChange={handleInputChange}
            name="comment"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {successMessage && (
        <div>
          <p className="error-text">{successMessage}</p>
        </div>
      )}
    </div>
  );
};
export default Contact;
