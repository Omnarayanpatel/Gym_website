import { useMemo, useState } from 'react';
import { getChatbotReply } from '../services/chatbotService';

const initialMessages = [
  {
    id: 1,
    role: 'assistant',
    text: 'Hi! I am the PowerFit gym assistant. Ask me about timings, fees, trainers, trial classes, workouts, or diet plans.',
  },
];

export default function useChatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = (presetMessage) => {
    const messageText = typeof presetMessage === 'string' ? presetMessage : input;
    const trimmed = messageText.trim();
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
