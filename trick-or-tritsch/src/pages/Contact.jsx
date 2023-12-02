import { useState } from "react";
import { validateEmail } from "../utils/helpers";

const Contact = () => {
  const [nameField, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid.");
      return;
    }

    if (!nameField) {
      setErrorMessage("Please enter a name.");
      return;
    }

    if (!comment) {
      setErrorMessage("Please enter a message.");
      return;
    }

    setEmail('');
    setComment('');
    setName('');
    setErrorMessage('');
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
    </div>
  );
};
export default Contact;
