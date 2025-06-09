import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.png";
import call_icon from "../../assets/call_icon.png";
import location_icon from "../../assets/location_icon.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9c805853-5928-4bd5-b5ca-80b1c4b07760");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaiable to take on new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>selvalakshmikannan2004@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>7904564531</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="loaction" />
              <p>
                384,Thiruvalluvar Street,
                <br />
                Rajapalayam - 626117
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your E-Mail</label>
          <input type="email" placeholder="Enter your mail" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" row="8" placeholder="Enter your message" />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
