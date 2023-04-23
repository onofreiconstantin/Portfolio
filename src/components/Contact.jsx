import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import useCheckVisible from "../hooks/useCheckVisible";
import coddingImage from "../resources/img/contact-codding.webp";

const Contact = () => {
  const formRef = useRef(null);
  const parentRef = useRef(null);
  const captchaRef = useRef(null);
  const { animateElement } = useCheckVisible(parentRef);
  const [isSending, setIsSending] = useState(false);

  console.log(captchaRef);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    if (!captchaRef.current.getValue()) {
      toast.error("Please confirm that you are not a robot!");
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
        { g_recaptcha_response: captchaRef.current.getValue() }
      )
      .then(
        () => {
          formRef.current.reset();
          toast.success("Email sent");
          setIsSending(false);
          captchaRef.current.reset();
        },
        () => {
          toast.error("Email couldn't be sent");
          setIsSending(false);
          captchaRef.current.reset();
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
                    pattern="[A-Za-z]{3,}"
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
                    pattern="[A-Za-z]{3,}"
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
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
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
                    pattern="\d{3}[\s-]?\d{3}[\s-]?\d{4}"
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
                    placeholder="Reason"
                    required
                    className="contact__form--input u-textarea"
                  />
                  <label htmlFor="reason" className="contact__form--label">
                    Reason
                  </label>
                </div>
              </div>
              <div>
                <ReCAPTCHA
                  className="u-margin-bottom"
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_SITE_KEY}
                  size={window.innerWidth < 600 ? "compact" : "normal"}
                />
                <button
                  className="btn-cv u-max-width"
                  type="submit"
                  value="Send"
                  disabled={isSending}
                >
                  Submit
                </button>
              </div>
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
