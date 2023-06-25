import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/Hi";

import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("demo@gmail.com");
  const [text, setText] = useState("text here");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("Name : " + event.target[0].value);
    console.log("Email : " + event.target[1].value);
    console.log("Text : " + event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="Via Chat Support"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button text="Via Call" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="Via Email Form"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea rows="8" name="text" />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="Contact Image" />
      </div>
    </section>
  );
};

export default ContactForm;
