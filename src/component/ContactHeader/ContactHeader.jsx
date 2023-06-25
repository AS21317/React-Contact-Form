// Importing styles from its css module
import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        Lets Connect: We are here to help and we had love to help from you.
        Whether you have a question comment or you just want to chat, you can
        reach out to us throw the contact form of this page or by phone call,
        email or social media.
      </p>
    </div>
  );
};

export default ContactHeader;
