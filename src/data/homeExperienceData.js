const asset = (file) => new URL(`../assets/${file}`, import.meta.url).href;

export const centerClasses = [
  {
    badge: 'BEGINNER',
    coach: 'Naveen Sharma',
    title: 'Yoga Flow',
    meta: 'YOGA | BEGINNER | 30 Min',
    cta: 'Book',
    image: asset('gym_program_1.jfif'),
  },
  {
    badge: 'INTERMEDIATE',
    coach: 'OM Patel',
    title: 'Strength Floor',
    meta: 'S&C | INTERMEDIATE | 45 Min',
    cta: 'Book',
    image: asset('gym_program_3.jfif'),
  },
  {
    badge: 'INTERMEDIATE',
    coach: 'Rahul Shetty',
    title: 'Cardio HEAT',
    meta: 'CARDIO | INTERMEDIATE | 30 Min',
    cta: 'Book',
    image: asset('gym_program_4.jfif'),
  },
  {
    badge: 'BEGINNER',
    coach: 'Satakshi',
    title: 'Dance Fitness',
    meta: 'DANCE | BEGINNER | 34 Min',
    cta: 'Explore',
    image: asset('gym_program_2.jfif'),
  },
  {
    badge: 'INTERMEDIATE',
    coach: 'Dev Kapoor',
    title: 'Boxing Bag Workout',
    meta: 'BOXING | INTERMEDIATE | 40 Min',
    cta: 'Book',
    image: asset('gym_trainer2.jfif'),
  },
  {
    badge: 'ALL LEVELS',
    coach: 'Satakshi',
    title: 'Mobility Reset',
    meta: 'RECOVERY | ALL LEVELS | 20 Min',
    cta: 'Explore',
    image: asset('gym_trainer_girl.jfif'),
  },
];

export const homeClasses = [
  {
    badge: 'BEGINNER',
    coach: 'PowerFit Team',
    title: 'PowerFit Home Flow',
    meta: 'HOME | BEGINNER | 25 Min',
    cta: 'Start',
    image: asset('cta.jfif'),
  },
  {
    badge: 'ALL LEVELS',
    coach: 'PowerFit Team',
    title: 'Core Builder',
    meta: 'HOME | ALL LEVELS | 20 Min',
    cta: 'Start',
    image: asset('gym_program_1.jfif'),
  },
  {
    badge: 'INTERMEDIATE',
    coach: 'PowerFit Team',
    title: 'Fat Burn Express',
    meta: 'HOME | INTERMEDIATE | 28 Min',
    cta: 'Try',
    image: asset('gym_program_4.jfif'),
  },
  {
    badge: 'EASY',
    coach: 'PowerFit Team',
    title: 'Stretch and Recover',
    meta: 'HOME | EASY | 18 Min',
    cta: 'Try',
    image: asset('gym_backgound.jfif'),
  },
];

export const trialCards = [
  {
    kicker: 'Trial visit',
    title: 'Walk the floor',
    copy: 'See the space, equipment, and training flow before you join.',
    cta: 'Start free trial',
    image: asset('gym_backgound.jfif'),
  },
  {
    kicker: 'Coach session',
    title: 'Meet the coach',
    copy: 'Get a quick goal check and understand the best plan for you.',
    cta: 'Start free trial',
    image: asset('gym_trainer_1.jfif'),
  },
  {
    kicker: 'Fast booking',
    title: 'Book with confidence',
    copy: 'A simple first visit that feels easy from the first click.',
    cta: 'Start free trial',
    image: asset('cta.jfif'),
  },
];

export const faqItems = [
  {
    question: 'What do I need for my first trial?',
    answer:
      'Just wear comfortable clothes and arrive a few minutes early. Our team will guide you through the basics and help you choose the right path.',
  },
  {
    question: 'Can beginners join the classes?',
    answer:
      'Yes. The sessions are built to be beginner friendly, with clear coaching and simple progressions.',
  },
  {
    question: 'How do I choose a membership?',
    answer:
      'Start with your goal, training level, and budget. The Standard Plan is the easiest all-round choice for most members.',
  },
  {
    question: 'Do you offer coach support?',
    answer:
      'Yes. Members can ask for guidance in the gym and through the chatbot before visiting.',
  },
  {
    question: 'What are the gym hours?',
    answer: 'PowerFit is open daily from 5 AM to 11 PM.',
  },
  {
    question: 'How can I book?',
    answer:
      'Use the contact form, WhatsApp follow-up, or the free-trial button to get a quick response.',
  },
];
