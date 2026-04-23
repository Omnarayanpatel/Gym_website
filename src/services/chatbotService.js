export function getChatbotReply(message = '') {
  const text = message.toLowerCase();

  if (text.includes('weight') || text.includes('lose') || text.includes('fat')) {
    return {
      reply: 'Great goal. For weight loss, I recommend our Weight Loss Plan. Are you a beginner, or have you trained before?',
      next: 'weight_loss',
    };
  }

  if (text.includes('muscle') || text.includes('gain') || text.includes('bulk')) {
    return {
      reply: 'Nice. For muscle gain, I recommend our Muscle Gain Plan. What is your experience level: beginner, intermediate, or advanced?',
      next: 'muscle_gain',
    };
  }

  if (text.includes('price') || text.includes('plan')) {
    return {
      reply: 'I can help with plans. We have Basic, Standard, and Premium options. Which one do you want details for?',
      next: 'plans',
    };
  }

  return {
    reply: 'Tell me your goal: weight loss, muscle gain, or beginner guidance. I will suggest the right plan.',
    next: 'start',
  };
}
