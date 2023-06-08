import React, { useState } from "react";
import emailjs from "emailjs-com";
import api from "../../api/api";

const Result = () => {
  return (
    <p className="success-message">
      Your Message has been successfully sent. I will contact you soon.
    </p>
  );
};

function ContactForm({ props, formStyle }) {
  const [result, showresult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      api
        .post("/api/email/v1", form)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      showresult(true);
      setTimeout(() => {
        showresult(false);
      }, 5000);
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
    
  };

  const onFormChange = (e) => {
    const { name, value } = e.target || {};
    setForm({ ...form, [name]: value });
  };


  return (
    <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          onChange={onFormChange}
          placeholder="Your Name"
          required
          value={form.name}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          onChange={onFormChange}
          placeholder="Email Address"
          required
          value={form.email}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="phone"
          onChange={onFormChange}
          placeholder="Phone Number"
          required
          value={form.phone}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="subject"
          onChange={onFormChange}
          placeholder="Subject"
          required
          value={form.subject}
        />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={onFormChange}
          required
          value={form.message}
        ></textarea>
      </div>

      <div className="form-group">
        <button disabled={loading} className="btn-default btn-large">Submit Now</button>
      </div>

      <div className="form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactForm;
