import { useEffect, useRef } from 'react';
import Button from './Button';
import useChatbot from '../hooks/useChatbot';
import { quickChatPrompts } from '../services/chatbotService';

export default function Chatbot() {
  const { messages, input, setInput, open, setOpen, canSend, sendMessage } = useChatbot();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, open]);

  return (
    <div className="chatbot-widget">
      {open ? (
        <div className="chatbot-panel card">
          <div className="chatbot-head">
            <div className="chatbot-avatar" aria-hidden="true">PF</div>
            <div className="chatbot-head__copy">
              <strong>PowerFit Assistant</strong>
              <span className="chatbot-status">Online now</span>
            </div>
            <button className="chatbot-icon-btn" onClick={() => setOpen(false)} aria-label="Close chat">
              x
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatbot-bubble ${message.role === 'user' ? 'is-user' : 'is-assistant'}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-prompts" aria-label="Quick gym questions">
            {quickChatPrompts.map((prompt) => (
              <button key={prompt} type="button" onClick={() => sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>
          <div className="chatbot-compose">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && sendMessage()}
              placeholder="Ask gym question..."
            />
            <Button onClick={sendMessage} disabled={!canSend}>
              Send
            </Button>
          </div>
        </div>
      ) : (
        <button type="button" onClick={() => setOpen(true)} className="chatbot-launch" aria-label="Open gym chat">
          <span className="chatbot-launch__pulse" aria-hidden="true" />
          <span className="chatbot-launch__icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="chatbot-launch__text">Chat with us</span>
        </button>
      )}
    </div>
  );
}
