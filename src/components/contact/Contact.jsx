import React from "react";
import Back from "../common/Back/Back";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Back title={"Contact Us"} />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126947.43111397664!2d80.2209766!3d6.11626595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1749013557957!5m2!1sen!2slk"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <div className="items grid">
              <div className="box">
                <h4>Address: </h4>
                <p>196 west 21st street, Suit 751 New York.</p>
              </div>
              <div className="box">
                <h4>Email: </h4>
                <p>info@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+123 456 456 2223</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows={10}>
                Create a Message here
              </textarea>
              <button className="primary-btn">SEND MESSAGES</button>
            </form>
            <h3>Follow Us Here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
