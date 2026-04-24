import { useState } from 'react';
import { faqItems } from '../../data/homeExperienceData';

function FaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;

  return (
    <article className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <strong>{item.question}</strong>
        <span className="faq-chevron" aria-hidden="true">
          +
        </span>
      </button>
      <div id={panelId} className={`faq-answer${isOpen ? ' is-open' : ''}`}>
        <div className="faq-answer__inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </article>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="section-title">Questions people ask before joining</h2>
          </div>
          <p className="section-copy">Clear answers remove hesitation and make the first enquiry feel much easier.</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <FaqItem
              key={item.question}
              index={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
