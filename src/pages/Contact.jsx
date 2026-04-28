import { useState } from 'react';
import { siteInfo } from '../data/siteInfo';

const rawFormspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
const hasValidFormspreeEndpoint =
  rawFormspreeEndpoint &&
  rawFormspreeEndpoint.startsWith('https://formspree.io/f/') &&
  !rawFormspreeEndpoint.includes('your-form-id');

const contactHighlights = [
  {
    label: 'Hours',
    value: '5 AM - 11 PM',
    note: 'Open daily for early workouts, evening strength sessions, and flexible visits.',
  },
  {
    label: 'Response',
    value: 'Quick support',
    note: 'Ask about plans, trial sessions, beginner guidance, or trainer availability.',
  },
  {
    label: 'Visit',
    value: 'Tour the gym',
    note: 'Walk in, explore the floor, and speak with the team before choosing a membership.',
  },
];

const quickLinks = [
  'Membership enquiry',
  'Free trial booking',
  'Trainer consultation',
];

export default function Contact() {
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!hasValidFormspreeEndpoint) {
      setFormMessage('Form setup abhi pending hai. Real Formspree form ID add karne ke baad submissions email par aayengi.');
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFormMessage('Submitting your enquiry...');

    try {
      const response = await fetch(rawFormspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      form.reset();
      setFormMessage('Your enquiry has been submitted successfully. You should receive it on your Formspree email setup.');
    } catch (error) {
      setFormMessage('Form submit nahi ho paya. Formspree endpoint aur internet connection ek baar check kar lo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section">
      <div className="container contact-shell">
        <div className="contact-intro card">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Talk to the team at {siteInfo.name}</h1>
          <p className="section-copy">
            Reach out for membership details, a free trial, or help choosing the right training plan. The contact page should feel clear, responsive, and ready for real enquiries from serious prospects.
          </p>
          <p className="section-copy contact-intro__subcopy">
            We keep the process simple so a first-time visitor can ask a question, share their goal, and get a fast reply without confusion.
          </p>

          <div className="contact-highlight-grid">
            {contactHighlights.map((item) => (
              <article key={item.label} className="contact-highlight">
                <span className="contact-highlight__label">{item.label}</span>
                <strong className="contact-highlight__value">{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>

          <div className="contact-visit-panel">
            <div>
              <p className="contact-panel__eyebrow">Visit the gym</p>
              <h2>Built for trial visits, memberships, and serious training.</h2>
              <p>
                Final address, phone number, WhatsApp, and map embed can be swapped in as soon as the owner shares them. The layout is already ready for real business details.
              </p>
            </div>
            <div className="contact-visit-panel__meta">
              <div>
                <span>Address</span>
                <strong>PowerFit Gym location to be added</strong>
              </div>
              <div>
                <span>Contact</span>
                <strong>Phone and WhatsApp to be added</strong>
              </div>
              <div>
                <span>Best for</span>
                <strong>Plans, trial bookings, and trainer queries</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel card">
          <div className="contact-form-panel__head">
            <p className="eyebrow">Enquiry Form</p>
            <h2 className="contact-form-panel__title">Send your details</h2>
            <p className="section-copy">
              Share your goal and our team can guide you to the right plan, trainer, or starting point.
            </p>
          </div>

          <div className="contact-chip-row" aria-label="Popular enquiry types">
            {quickLinks.map((item) => (
              <span key={item} className="contact-chip">{item}</span>
            ))}
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value={`New enquiry from ${siteInfo.name}`} />
            <input type="hidden" name="_captcha" value="false" />
            <div className="contact-form__grid">
              <label className="contact-field">
                <span>Name</span>
                <input name="name" placeholder="Enter your full name" style={fieldStyle} required />
              </label>
              <label className="contact-field">
                <span>Mobile Number</span>
                <input name="mobile" placeholder="Enter your mobile number" style={fieldStyle} required />
              </label>
            </div>

            <label className="contact-field">
              <span>Email</span>
              <input name="email" placeholder="Enter your email address" type="email" style={fieldStyle} required />
            </label>

            <label className="contact-field">
              <span>Your Goal</span>
              <select name="goal" defaultValue="" style={fieldStyle} required>
                <option value="" disabled>Select your main fitness goal</option>
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>General Fitness</option>
                <option>Personal Training</option>
              </select>
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea name="message" placeholder="Tell us what you need help with" rows="5" style={fieldStyle} required />
            </label>

            <button className="btn btn-primary contact-form__submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            <p className="contact-form__note">
              {formMessage || (hasValidFormspreeEndpoint
                ? 'Form submissions are connected to Formspree and can be delivered directly to your email inbox.'
                : 'Add your real Formspree endpoint in `.env` as `VITE_FORMSPREE_ENDPOINT`. Right now the project is still using the placeholder `your-form-id`.')}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const fieldStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  color: 'var(--text)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 16,
  padding: '14px 16px',
  outline: 'none',
};
