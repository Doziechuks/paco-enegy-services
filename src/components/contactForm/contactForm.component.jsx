import classes from "./contactForm.module.css";

import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

import { connect } from "react-redux";
import { handleSubmitForm } from "../../redux/navToggle/navToggleAction";

const ContactForm = ({ isContactPage, setSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const [showSectionSlide, setShowSectionSlide] = useState(false);

  const showSection = () => {
    if (window.scrollY >= 1600) {
      setShowSectionSlide(true);
    } else {
      setShowSectionSlide(false);
    }
  };
  window.addEventListener("scroll", showSection);

  const form = useRef();
  const serviceId = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`;
  const templateId = `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`;
  const publicKey = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`;

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
    } catch (error) {
      console.log(error.text);
    }
    setEmail("");
    setMessage("");
    setName("");
    setTitle("");
    setSuccess(false);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form
      ref={form}
      onSubmit={handleSendEmail}
      className={`${isContactPage ? classes.container2 : classes.container} ${
        showSectionSlide ? classes.showSlide : ""
      }`}
    >
      <div className={classes.nameEmail}>
        <FormInput
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleName}
          required
          isSmall
        />
        <FormInput
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={handleEmail}
          required
          isSmall
        />
      </div>
      <FormInput
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={handleTitle}
        required
      />
      <textarea
        placeholder="message body"
        name="message"
        value={message}
        onChange={handleMessage}
        required
        className={classes.messages}
      />
      <CustomButton type="submit" isSubmit>
        submit
      </CustomButton>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSuccess: (user) => dispatch(handleSubmitForm(user))
});

export default connect(null, mapDispatchToProps)(ContactForm);
