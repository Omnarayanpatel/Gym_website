import Button from './Button';
import useChatbot from '../hooks/useChatbot';

export default function Chatbot() {
  const { messages, input, setInput, open, setOpen, canSend, sendMessage } = useChatbot();

  return (
    <div style={{ width: 320, maxWidth: 'calc(100vw - 40px)' }}>
      {open ? (
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: 16, borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>AI Trainer Bot</strong>
            <button className="btn btn-secondary" onClick={() => setOpen(false)} style={{ padding: '8px 12px' }}>
              Close
            </button>
          </div>
          <div style={{ padding: 16, maxHeight: 260, overflow: 'auto', display: 'grid', gap: 12 }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  justifySelf: message.role === 'user' ? 'end' : 'start',
                  background: message.role === 'user' ? 'rgba(110, 231, 255, 0.16)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: '10px 12px',
                  maxWidth: '90%',
                }}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div style={{ padding: 16, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && sendMessage()}
              placeholder="Type your goal..."
              style={{
                flex: 1,
                minWidth: 0,
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 999,
                padding: '12px 14px',
              }}
            />
            <Button onClick={sendMessage} disabled={!canSend}>
              Send
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setOpen(true)} className="btn-primary" style={{ width: '100%' }}>
          Chat with AI
        </Button>
      )}
    </div>
  );
}
