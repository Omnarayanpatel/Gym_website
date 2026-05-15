const gymAnswers = [
  {
    keys: ['timing', 'time', 'open', 'close', 'closing', 'hours', 'kab khulta', 'kab band'],
    reply: 'Our gym is open every day from 5 AM to 11 PM.',
  },
  {
    keys: ['trainer', 'personal trainer', 'pt', 'coach'],
    reply: 'Yes, certified personal trainers are available with our Premium plan.',
  },
  {
    keys: ['workout', 'routine', 'exercise', 'training plan'],
    reply: 'Yes, we provide workout plans for beginners, weight loss, muscle gain, and general fitness.',
  },
  {
    keys: ['diet', 'nutrition', 'meal', 'food'],
    reply: 'Yes, customized diet guidance is available for members.',
  },
  {
    keys: ['fee', 'fees', 'price', 'cost', 'membership', 'package', 'packages', 'monthly', 'yearly', 'plans'],
    reply: 'Membership starts from Rs 999/month. Standard is Rs 1499/month and Premium is Rs 2499/month.',
  },
  {
    keys: ['trial', 'demo', 'free class', 'free trial'],
    reply: 'Yes, you can book a free trial class from the contact page.',
  },
  {
    keys: ['location', 'address', 'where', 'map', 'delhi'],
    reply: 'We are located in Delhi. Final address details can be added on the contact page.',
  },
  {
    keys: ['contact', 'phone', 'mobile', 'whatsapp', 'call', 'email'],
    reply: 'You can contact us through the enquiry form on the contact page. Phone and WhatsApp details can be added there.',
  },
  {
    keys: ['cardio', 'treadmill', 'cycle', 'cross trainer', 'equipment', 'machine'],
    reply: 'Yes, we have cardio equipment and strength training machines.',
  },
  {
    keys: ['strength', 'weights', 'dumbbell', 'barbell', 'bench'],
    reply: 'Yes, we have strength equipment including free weights and machines.',
  },
  {
    keys: ['weight loss', 'lose weight', 'fat loss', 'fat', 'slim'],
    reply: 'Yes, we offer a weight loss program with cardio, strength training, and diet guidance.',
  },
  {
    keys: ['muscle', 'gain', 'bulk', 'bodybuilding', 'mass'],
    reply: 'Yes, our muscle gain program focuses on strength training, progressive workouts, and nutrition support.',
  },
  {
    keys: ['yoga', 'zumba'],
    reply: 'Yes, Yoga and Zumba classes are available. Please ask the team for the latest batch schedule.',
  },
  {
    keys: ['offer', 'discount', 'deal'],
    reply: 'Offers and discounts may be available on selected packages. Please contact us for current offers.',
  },
  {
    keys: ['online', 'online training', 'home workout'],
    reply: 'Yes, online training guidance is available for members who prefer remote support.',
  },
  {
    keys: ['hello', 'hi', 'hey', 'namaste'],
    reply: 'Hi! I can help with gym timings, fees, trainers, trial classes, workout plans, and diet plans.',
  },
];

export const quickChatPrompts = [
  'Gym timings',
  'Membership fees',
  'Book trial',
  'Personal trainer',
];

export function getChatbotReply(message = '') {
  const text = message.toLowerCase().trim();
  const matchedAnswer = gymAnswers.find((item) => item.keys.some((key) => text.includes(key)));

  if (matchedAnswer) {
    return {
      reply: matchedAnswer.reply,
      next: 'answered',
    };
  }

  return {
    reply: 'Sorry, I can only help with gym-related questions.',
    next: 'blocked',
  };
}
