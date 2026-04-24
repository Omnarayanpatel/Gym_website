export default function Contact() {
  return (
    <section className="section">
      <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Let's capture the lead</h1>
          <p className="section-copy">
            Fill in your details to ask about membership, book a free trial, or request a callback from our team.
            We reply quickly during working hours and help you choose the right plan.
          </p>
          <p className="section-copy" style={{ marginTop: 16 }}>
            Address, WhatsApp link, and map can be added here once the gym owner shares the final business details.
          </p>
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
