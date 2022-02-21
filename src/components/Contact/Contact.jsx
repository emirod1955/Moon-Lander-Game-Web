import React, { useState} from "react";
import { db } from "./firebase";

/*import './Contact.css';*/
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="todoForm">
    <form className="form" onSubmit={handleSubmit}>
      <div className="formularios">
      <h1 className="contactTitle">Contact Us 📬</h1>


      <label>Name</label>
      
      <div className="seccion1">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>

      <label>Email</label>
      
      <div className="seccion1"><input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /></div>

      
      <label>Message</label>
      <div className="seccion1"><textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea></div>

      <button
        type="submit"
        style={{ background: loader ? "#EEEEEE" : "#fff" }}
        id="submitButton"
      >
        Submit
      </button>
      </div>
    </form>
    </div>
  );
};

export {Contact};