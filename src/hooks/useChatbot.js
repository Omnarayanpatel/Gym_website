import { useMemo, useState } from 'react';
import { getChatbotReply } from '../services/chatbotService';

const initialMessages = [
  {
    id: 1,
    role: 'assistant',
    text: 'Hi! I can help you choose a gym plan. Tell me your goal: weight loss or muscle gain?',
  },
];

export default function useChatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { id: Date.now(), role: 'user', text: trimmed },
      { id: Date.now() + 1, role: 'assistant', text: getChatbotReply(trimmed).reply },
    ]);
    setInput('');
  };

  return { messages, input, setInput, open, setOpen, canSend, sendMessage };
}
