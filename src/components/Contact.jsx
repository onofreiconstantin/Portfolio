import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import useCheckVisible from "../hooks/useCheckVisible";
import coddingImage from "../resources/img/contact-codding.jpg";

const Contact = () => {
  const formRef = useRef(null);
  const parentRef = useRef(null);
  const { animateElement } = useCheckVisible(parentRef);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          formRef.current.reset();
          toast.success("Email sent");
          setIsSending(false);
        },
        () => {
          toast.error("Email couldn't be sent");
          setIsSending(false);
        }
      );
  };

  return (
    <section className="section-contact" ref={parentRef}>
      <div className="contact">
        <div className="contact__header">
          <h2
            className={`heading-secondary ${
              animateElement && "leftToRight u-animation-delay"
            }`}
          >
            Contact me
          </h2>
        </div>
        <div
          className={`contact__container ${
            animateElement && "bottomToTop u-animation-delay"
          }`}
        >
          <div className="contact__column">
            <form className="contact__form" ref={formRef} onSubmit={sendEmail}>
              <div className="contact__form--column">
                <div className="contact__form--input-group">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    className="contact__form--input"
                    name="lastName"
                  />
                  <label htmlFor="lastName" className="contact__form--label">
                    Last Name
                  </label>
                </div>
                <div className="contact__form--input-group">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="contact__form--input"
                  />
                  <label htmlFor="firstName" className="contact__form--label">
                    Last Name
                  </label>
                </div>
                <div className="contact__form--input-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="contact__form--input"
                  />
                  <label htmlFor="firstName" className="contact__form--label">
                    Email
                  </label>
                </div>
                <div className="contact__form--input-group">
                  <input
                    type="tel"
                    id="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="contact__form--input"
                  />
                  <label htmlFor="Phone" className="contact__form--label">
                    Phone
                  </label>
                </div>
              </div>
              <div className="contact__form--column">
                <div className="contact__form--input-group u-max-height">
                  <textarea
                    id="reason"
                    name="reason"
                    placeholder="Tell me about your story and what is your reason for contacting me..."
                    required
                    className="contact__form--input u-textarea"
                  />
                  <label htmlFor="reason" className="contact__form--label">
                    Tell me about your story and what is your reason for
                    contacting me...
                  </label>
                </div>
              </div>
              <button
                className="btn-cv "
                type="submit"
                value="Send"
                disabled={isSending}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="contact__column">
            <img src={coddingImage} alt="Codding Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
