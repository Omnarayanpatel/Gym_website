const testimonials = [
  { name: 'Aman', quote: 'The plan structure is very clear and easy to follow.' },
  { name: 'Priya', quote: 'The chatbot helped me get the right program quickly.' },
  { name: 'Rahul', quote: 'Lead capture and CTA placement feel strong and professional.' },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="section-title">Trust signals that feel believable</h2>
          </div>
          <p className="section-copy">Short, specific testimonials look more authentic than overdesigned marketing copy.</p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24 }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card" style={{ padding: 24 }}>
              <p style={{ marginTop: 0 }}>"{testimonial.quote}"</p>
              <strong>{testimonial.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
