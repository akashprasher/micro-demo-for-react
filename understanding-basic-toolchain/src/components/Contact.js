import React from "react";

let Contact = () => {
  return (
    <>
      <div className="container">
        <h1 className="heading">Contact</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className="form-div">
        <div className="contact-us">
          <form>
            <input placeholder="Name" required="" type="text" />
            <input name="customerEmail" placeholder="Email" type="email" />
            <input
              name="customerPhone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Phone"
              type="tel"
            />
            <button type="button">SIGN UP</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
