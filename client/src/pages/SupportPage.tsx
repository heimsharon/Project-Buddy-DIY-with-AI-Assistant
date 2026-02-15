import { useState, type FormEvent, type FocusEvent } from 'react'
import { Link } from 'react-router-dom'


export default function SupportPage() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.email) errors.email = "Email is Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Invalid Email";
    if (!formData.message) errors.message = "Message is Required";
    return errors;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFieldErrors(prev => ({
      ...prev,
      [name]: !value ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : ''
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length) {
      setError("Please Fix the Errors Above.");
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      const formDataForSubmission = {
        'form-name': 'contact',
        ...formData,
      },

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataForSubmission).toString(),
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ email: '', message: '' });
      } else {
        setError("Failed to Send Message. Please Try Again");
      }
    } catch (error) {
      setError("Network Error. Please Try Again");
    }
    setIsLoading(false);
  };

  //chat bot to answer basic question, link to FAQ page, email option 

  return (
    <div className="support-Page__background">
      <main
        className="support-page__container"
        aria-label="Support Page"
      >
        <h1
          className="support-page__header"
        > Support Page
        </h1>
        <p className="support-page__text"
        > Welcome to Project Buddy Support Page. Sorry that something has happened that requires further assistance. Please, if not already done so, Buddy, the AI Assistant can answer many questions, out side of DIY information. There is also a link to out FAQ page, which may have the answer you are looking for. If non of these tool do not work you can also email us, just know that maybe a delay in response.
        </p>

        <Link
          to="/faq"
          className="btn--primary"
        > Link to FAQ
        </Link>

        <div className="form-input">
          <form
            onSubmit={handleSubmit}
            name="contact-support-email"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />
            <p style={{ display: 'none' }}>
              <label>
                Don't fill this out if you are human:
                <input name="bot-field"
                />
              </label>
            </p>
            <fieldset
              className="contact-support-email__fieldset"
              disabled={isLoading}
            >
              <legend
                className="sr-only"
              > Contact Support Email
              </legend>

              <h3
                className="contact-support-email__form--header"
              > Contact Support Email
              </h3>

              <label
                htmlFor="email"
              > User Email
              </label>

              <input
                className="form--input"
                id="email"
                name="email"
                type="email"
                placeholder=" Enter Your Email Address"
                value={formData.email}
                onChange={e =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                onBlur={handleBlur}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email
                  ? "email-error" : undefined}
              />

              {fieldErrors.email && (
                <span
                  className="contact-error"
                  id="email-error"
                  role="alert"
                  aria-live="assertive"
                >
                  {fieldErrors.email}
                </span>
              )}

              <label
                htmlFor="message__textarea"
              > Message
              </label>
              <textarea
                className="support-message__textarea"
                id="message__textarea"
                name="message"
                placeholder="Enter Question/Message for the Support Team Here."
                value={formData.message}
                onChange={e =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                onBlur={handleBlur}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={fieldErrors.message
                  ? "message-error" : undefined}
              />

              {fieldErrors.message && (
                <span className="contact-error"
                  id="message-error"
                  role="alert"
                  aria-live="assertive"
                >
                  {fieldErrors.message}
                </span>
              )}

              {isSuccess && (
                <div
                  className="success__message"
                  id="success__message"
                  role="status"
                  aria-live="polite"
                > Message Sent Successfully
                </div>
              )}

              {error && (
                <div
                  className="error__message"
                  id="support-email-error"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </div>
              )}

              <button
                className="btn--primary"
                type="submit"
                disabled={isLoading}
              > Support Email
              </button>


            </fieldset>
          </form>
        </div>
      </main >
    </div >
  )
}