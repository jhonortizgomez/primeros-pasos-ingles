import type { LessonPlan, LessonPlanRepository } from "../domain/lesson-plan";

const lessonPlans: LessonPlan[] = [
  {
    id: "verb-to-be",
    title: "Verb to be",
    subtitle: "Talk about who you are and how you feel.",
    level: "A1",
    color: "green",
    icon: "01",
    emoji: "🙋‍♀️",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Children learning together in a classroom",
    explanation: "The verb to be helps us say who we are, how we feel and where we are. It is like a small bridge between a person and information about them.",
    examples: ["I am Sofia. 🙋‍♀️", "He is happy. 😊", "We are friends. 🤝"],
    objectives: [
      "Recognize am, is and are in short sentences.",
      "Introduce yourself and describe people with confidence.",
      "Answer simple questions about identity and feelings.",
    ],
    resources: [
      { label: "Video: verb to be for kids", type: "video", url: "https://www.youtube.com/results?search_query=verb+to+be+for+kids" },
      { label: "Worksheet: am, is, are", type: "worksheet", url: "https://www.liveworksheets.com/search.asp?content=verb+to+be" },
      { label: "Google games: verb to be", type: "game", url: "https://www.google.com/search?q=verb+to+be+games+for+kids" },
    ],
    questions: [
      { prompt: "My name ___ Laura.", options: ["am", "is", "are", "be"], answer: "is" },
      { prompt: "___ you happy today?", options: ["Am", "Is", "Are", "Be"], answer: "Are" },
      { prompt: "We ___ students.", options: ["am", "is", "are", "has"], answer: "are" },
    ],
    reflection: "When can you use am, is or are to tell someone something about yourself or a friend? Write three sentences and read them aloud.",
    podcast: { title: "Verb to be podcast", audioUrl: "/podcasts/verb-to-be.mp3" },
  },
  {
    id: "clothes",
    title: "Clothes",
    subtitle: "Name what you wear and describe it.",
    level: "A1",
    color: "orange",
    icon: "02",
    emoji: "👕",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Colorful clothes ready to wear",
    explanation: "Clothes are the things we wear on our body. We can name them, talk about their colors and say what someone is wearing today.",
    examples: ["I wear a blue shirt. 👕", "She has red shoes. 👟", "This is my hat. 🧢"],
    objectives: [
      "Identify everyday clothes in English.",
      "Use colors and simple adjectives to describe an outfit.",
      "Practice respectful conversations about what people wear.",
    ],
    resources: [
      { label: "Video: clothes vocabulary", type: "video", url: "https://www.youtube.com/results?search_query=clothes+vocabulary+for+kids" },
      { label: "Worksheet: clothes and colors", type: "worksheet", url: "https://www.liveworksheets.com/search.asp?content=clothes+vocabulary" },
      { label: "Google games: clothes vocabulary", type: "game", url: "https://www.google.com/search?q=clothes+vocabulary+games+for+kids" },
    ],
    questions: [
      { prompt: "You wear a ___ on your head.", options: ["shoes", "hat", "skirt", "socks"], answer: "hat" },
      { prompt: "Which sentence is correct?", options: ["She have a dress.", "She has a dress.", "She is a dress.", "She dress has."], answer: "She has a dress." },
      { prompt: "What do you wear on your feet?", options: ["A jacket", "A scarf", "Shoes", "A shirt"], answer: "Shoes" },
    ],
    reflection: "Look at your clothes today. Which three words in English can you use to describe them? Draw your outfit and label it.",
    podcast: { title: "Clothes podcast", audioUrl: "/podcasts/clothes.mp3" },
  },
  {
    id: "daily-routine",
    title: "Daily routine",
    subtitle: "Share the small actions in your day.",
    level: "A2",
    color: "cyan",
    icon: "03",
    emoji: "⏰",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUNGDi7eoVzIDWY1jnNNEAniZPM9IDfJyk4MEgbu7JRAMcqRTixfX1IKGV&s=10",
    imageAlt: "Child starting a morning routine",
    explanation: "A daily routine is the order of things we do every day, from waking up in the morning to going to bed at night. We use it to talk about habits.",
    examples: ["I wake up at seven. ⏰", "I brush my teeth. 🪥", "I go to school. 🎒"],
    objectives: [
      "Order common daily activities from morning to night.",
      "Use the present simple to talk about habits.",
      "Ask and answer questions about a classmate's routine.",
    ],
    resources: [
      { label: "Video: my daily routine", type: "video", url: "https://www.youtube.com/results?search_query=daily+routine+in+english+for+kids" },
      { label: "Worksheet: daily routine", type: "worksheet", url: "https://www.liveworksheets.com/search.asp?content=daily+routine" },
      { label: "Google games: daily routine", type: "game", url: "https://www.google.com/search?q=daily+routine+games+for+kids+english" },
    ],
    questions: [
      { prompt: "I ___ breakfast at seven o'clock.", options: ["have", "has", "having", "am"], answer: "have" },
      { prompt: "She ___ to school every day.", options: ["go", "goes", "going", "is go"], answer: "goes" },
      { prompt: "Which activity usually happens before going to bed?", options: ["Wake up", "Have dinner", "Go to school", "Have breakfast"], answer: "Have dinner" },
    ],
    reflection: "Think about one part of your routine that helps you learn. Why is it important? Describe your day using five English sentences.",
    podcast: { title: "Daily routine podcast", audioUrl: "/podcasts/daily-routine.mp3" },
  },
];

export class InMemoryLessonPlanRepository implements LessonPlanRepository {
  async getAll() {
    return lessonPlans;
  }
}