export default function Contact() {
  return (
    <section className="section">
      <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Let’s capture the lead</h1>
          <p className="section-copy">Name, mobile number, email, and message form will go here with gym address and map.</p>
        </div>
        <form className="card" style={{ padding: 24, display: 'grid', gap: 14 }}>
          <input placeholder="Name" style={fieldStyle} />
          <input placeholder="Mobile Number" style={fieldStyle} />
          <input placeholder="Email" type="email" style={fieldStyle} />
          <textarea placeholder="Message" rows="5" style={fieldStyle} />
          <button className="btn btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

const fieldStyle = {
  background: 'rgba(255,255,255,0.05)',
  color: 'var(--text)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 16,
  padding: '12px 14px',
};
