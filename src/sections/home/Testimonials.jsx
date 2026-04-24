const testimonials = [
  {
    name: 'Aman',
    role: 'Weight loss member',
    rating: '5.0',
    quote: 'The plan structure is very clear and easy to follow. I knew what to do from day one and that made the journey simple.',
  },
  {
    name: 'Priya',
    role: 'Beginner member',
    rating: '4.9',
    quote: 'The chatbot helped me get the right program quickly. I liked how easy it was to understand the membership options.',
  },
  {
    name: 'Rahul',
    role: 'Strength training member',
    rating: '5.0',
    quote: 'Lead capture and CTA placement feel strong and professional. The whole site gives a premium first impression.',
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="section-title">What members say after joining</h2>
          </div>
          <p className="section-copy">Real feedback helps new visitors feel confident before they book a trial.</p>
        </div>
        <div className="grid testimonials-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24 }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card testimonial-card">
              <div className="testimonial-card__top">
                <span className="testimonial-card__rating">Member rating {testimonial.rating}/5</span>
                <span className="testimonial-card__stars">Verified member</span>
              </div>
              <p className="testimonial-card__quote">"{testimonial.quote}"</p>
              <div className="testimonial-card__footer">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
