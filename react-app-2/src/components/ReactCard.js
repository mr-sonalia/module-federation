import { useRef, useState } from "react";

const ReactCard = ({ pName, pEmail, pPhone }) => {
  const nameRef = useRef(null),
    emailRef = useRef(null),
    phoneRef = useRef(null);

  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [phone, setPhone] = useState("");

  // let name = "",
  //   email = "",
  //   phone = "";

  const submitHandler = (event) => {
    event.preventDefault();

    setName(nameRef.current.value ? nameRef.current.value : pName);
    setEmail(emailRef.current.value ? emailRef.current.value : pEmail);
    setPhone(phoneRef.current.value ? phoneRef.current.value : pPhone);

    // name = nameRef.current.value;
    // email = emailRef.current.value;
    // phone = phoneRef.current.value;

    console.log({ name, email, phone });
  };

  return (
    <div className="card">
      <div className="card__header">
        <h4>React Card</h4>
      </div>
      <div className="card__body">
        <form onSubmit={submitHandler} className="form">
          <input ref={nameRef} type="text" name="name" id="name" placeholder="Name" className="form__input" />
          <input ref={emailRef} type="email" name="email" id="email" placeholder="Email" className="form__input" />
          <input ref={phoneRef} type="tel" name="phone" id="phone" placeholder="Phone" className="form__input" />

          <input type="submit" value="Submit" className="form__submit" />
        </form>
      </div>
      <div className="card__footer">
        {name && email && phone ? (
          <p>
            Name: {name} <br />
            Email: {email} <br />
            Phone: {phone}
          </p>
        ) : (
          <p className="error">Enter values</p>
        )}
      </div>
    </div>
  );
};

export default ReactCard;
