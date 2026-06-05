export type Challenge =
  | { type: "multiple-choice"; question: string; options: string[]; correct: string }
  | { type: "fill-blank"; question: string; blank: string }
  | { type: "word-bank"; question: string; tokens: string[]; correctOrder: string[] };

export interface Lesson {
  lessonId: number;
  lessonTitle: string;
  focus: string;
  dialogue: { speaker: string; fr: string; en: string }[];
  vocabulary: { fr: string; en: string }[];
  grammar: { title: string; explanation: string; rules: string[] };
  challenges: Challenge[];
}

export interface Unit {
  unitId: number;
  unitTitle: string;
  lessons: Lesson[];
}

export const LE_NOUVEAU_TAXI_COMPLETE_DB: Unit[] = [
  {
    unitId: 1,
    unitTitle: "Unité 1 : Rencontres",
    lessons: [
      {
        lessonId: 1,
        lessonTitle: "Leçon 1 : En route !",
        focus: "Saluer, se présenter, dire son nom.",
        dialogue: [
          { speaker: "Alice", fr: "Bonjour. Je suis Alice Doucet. Vous êtes madame Falco ?", en: "Hello. I am Alice Doucet. Are you Mrs. Falco?" },
          { speaker: "Nicole", fr: "Bonjour. Oui, je m'appelle Nicole Falco. Et voici Aldo, mon mari.", en: "Hello. Yes, my name is Nicole Falco. And here is Aldo, my husband." },
          { speaker: "Alice", fr: "Qui est-ce ?", en: "Who is it?" },
          { speaker: "Nicole", fr: "C'est Aldo. Il s'appelle Aldo.", en: "It's Aldo. His name is Aldo." },
        ],
        vocabulary: [
          { fr: "Bonjour", en: "Hello / Good morning" },
          { fr: "Je m'appelle", en: "My name is" },
          { fr: "Oui", en: "Yes" },
          { fr: "Non", en: "No" },
          { fr: "Mon mari", en: "My husband" },
          { fr: "Qui est-ce ?", en: "Who is that?" },
        ],
        grammar: {
          title: "Le verbe Être & S'appeler (Présent)",
          explanation: "Use 'Je suis' to state who you are, and 'Je m'appelle' to state your name.",
          rules: ["Je suis / Vous êtes", "Je m'appelle / Il s'appelle"],
        },
        challenges: [
          { type: "multiple-choice", question: "How do you say 'My name is'?", options: ["Je suis", "Je m'appelle", "Vous êtes", "Il s'appelle"], correct: "Je m'appelle" },
          { type: "fill-blank", question: "Vous ___ madame Falco ?", blank: "êtes" },
          { type: "word-bank", question: "Translate: 'I am Alice.'", tokens: ["Alice", "suis", "Je", "mari"], correctOrder: ["Je", "suis", "Alice"] },
        ],
      },
      {
        lessonId: 2,
        lessonTitle: "Leçon 2 : Dans un taxi",
        focus: "Demander et dire la nationalité.",
        dialogue: [
          { speaker: "Alice", fr: "Aldo ? Il est italien ?", en: "Aldo? Is he Italian?" },
          { speaker: "Nicole", fr: "Oui, et elle, c'est Nicole, elle est française.", en: "Yes, and her, that's Nicole, she is French." },
          { speaker: "Giacomo", fr: "Tu t'appelles Giacomo ! Tu es italien ?", en: "Your name is Giacomo! Are you Italian?" },
          { speaker: "Giacomo", fr: "Oui, oui. Je suis italien.", en: "Yes, yes. I am Italian." },
        ],
        vocabulary: [
          { fr: "Italien / Italienne", en: "Italian (m/f)" },
          { fr: "Français / Française", en: "French (m/f)" },
          { fr: "Tu es", en: "You are (informal)" },
          { fr: "Un taxi", en: "A taxi" },
        ],
        grammar: {
          title: "Le genre des nationalités",
          explanation: "Feminine nationalities typically add an 'e' at the end.",
          rules: ["Masculin: Italien, Français", "Féminin: Italienne, Française"],
        },
        challenges: [
          { type: "multiple-choice", question: "Feminine form of 'Français'?", options: ["Français", "Française", "Francaise", "Françaises"], correct: "Française" },
          { type: "fill-blank", question: "Il est ___ (Italian).", blank: "italien" },
        ],
      },
      {
        lessonId: 3,
        lessonTitle: "Leçon 3 : Club Océan",
        focus: "Nombres 1 à 20, demander des coordonnées.",
        dialogue: [
          { speaker: "Réceptionniste", fr: "Bonjour, monsieur. Vous vous appelez... ?", en: "Hello, sir. Your name is...?" },
          { speaker: "Yves", fr: "Doucet. Yves Doucet. Et voici ma femme, Alice.", en: "Doucet. Yves Doucet. And here is my wife, Alice." },
          { speaker: "Réceptionniste", fr: "Quel est votre numéro de téléphone ?", en: "What is your phone number?" },
        ],
        vocabulary: [
          { fr: "Un, deux, trois", en: "One, two, three" },
          { fr: "Ma femme", en: "My wife" },
          { fr: "Voici", en: "Here is" },
          { fr: "Le numéro", en: "The number" },
        ],
        grammar: {
          title: "Les adjectifs possessifs (Mon, Ma, Votre)",
          explanation: "Possessive adjectives change based on the gender of the noun that follows.",
          rules: ["Mon mari (m) / Ma femme (f)", "Votre numéro (formal)"],
        },
        challenges: [
          { type: "multiple-choice", question: "What does 'Voici' mean?", options: ["Hello", "Here is", "Goodbye", "Thanks"], correct: "Here is" },
          { type: "fill-blank", question: "Voici ___ femme, Alice.", blank: "ma" },
        ],
      },
    ],
  },
  {
    unitId: 2,
    unitTitle: "Unité 2 : Vie quotidienne",
    lessons: [
      {
        lessonId: 4,
        lessonTitle: "Leçon 4 : À la réception",
        focus: "Demander des informations, épeler son nom.",
        dialogue: [
          { speaker: "Client", fr: "Est-ce qu'il y a une chambre libre ?", en: "Is there a vacant room?" },
          { speaker: "Réceptionniste", fr: "Oui, quel est votre nom, s'il vous plaît ?", en: "Yes, what is your name, please?" },
          { speaker: "Client", fr: "M-A-R-T-I-N. Martin.", en: "M-A-R-T-I-N. Martin." },
        ],
        vocabulary: [
          { fr: "Une chambre", en: "A room" },
          { fr: "S'il vous plaît", en: "Please (formal)" },
          { fr: "Libre", en: "Free / Vacant" },
          { fr: "L'alphabet", en: "The alphabet" },
        ],
        grammar: {
          title: "L'interrogation avec 'Est-ce que'",
          explanation: "Place 'Est-ce que' at the beginning of a sentence to turn it into a yes/no question.",
          rules: ["Est-ce qu'il y a... ? (Is there...?)"],
        },
        challenges: [
          { type: "multiple-choice", question: "What is 'A room' in French?", options: ["Une chambre", "Un hôtel", "Un taxi", "Une femme"], correct: "Une chambre" },
          { type: "fill-blank", question: "Quel est votre nom, s'il vous ___ plaît ?", blank: "vous" },
        ],
      },
      {
        lessonId: 5,
        lessonTitle: "Leçon 5 : Au café",
        focus: "Commander des boissons, demander le prix.",
        dialogue: [
          { speaker: "Serveur", fr: "Vous désirez ?", en: "What would you like?" },
          { speaker: "Client", fr: "Un café et un croissant, s'il vous plaît.", en: "A coffee and a croissant, please." },
          { speaker: "Client", fr: "C'est combien ?", en: "How much is it?" },
          { speaker: "Serveur", fr: "Ça fait quatre euros.", en: "That makes four euros." },
        ],
        vocabulary: [
          { fr: "Un café", en: "A coffee" },
          { fr: "Un croissant", en: "A croissant" },
          { fr: "C'est combien ?", en: "How much is it?" },
          { fr: "Quatre euros", en: "Four euros" },
        ],
        grammar: {
          title: "Les articles indéfinis (Un, Une)",
          explanation: "'Un' is used for masculine nouns, 'Une' for feminine nouns.",
          rules: ["Un café (m) / Un croissant (m)", "Une boisson (f)"],
        },
        challenges: [
          { type: "multiple-choice", question: "How do you ask 'How much is it?'", options: ["Qui est-ce ?", "C'est combien ?", "S'il vous plaît", "Vous désirez ?"], correct: "C'est combien ?" },
          { type: "fill-blank", question: "Ça ___ quatre euros.", blank: "fait" },
        ],
      },
      {
        lessonId: 6,
        lessonTitle: "Leçon 6 : Des clients difficiles",
        focus: "Exprimer des préférences, utiliser la négation.",
        dialogue: [
          { speaker: "Client", fr: "Je n'aime pas le thé. Je préfère le café.", en: "I don't like tea. I prefer coffee." },
          { speaker: "Client", fr: "Est-ce que le croissant est chaud ?", en: "Is the croissant hot?" },
          { speaker: "Serveur", fr: "Oui, monsieur, il est chaud.", en: "Yes, sir, it is hot." },
        ],
        vocabulary: [
          { fr: "Le thé", en: "The tea" },
          { fr: "Le café", en: "The coffee" },
          { fr: "Chaud", en: "Hot" },
          { fr: "Je préfère", en: "I prefer" },
        ],
        grammar: {
          title: "La négation (Ne... pas)",
          explanation: "Surround the conjugated verb with 'ne' and 'pas'. 'Ne' becomes \"n'\" before a vowel.",
          rules: ["Je n'aime pas (I do not like)", "Je ne mange pas (I do not eat)"],
        },
        challenges: [
          { type: "multiple-choice", question: "How do you write 'I do not like'?", options: ["Je n'aime pas", "Je pas aime", "Je ne pas aime", "Je aime pas"], correct: "Je n'aime pas" },
          { type: "word-bank", question: "Translate: 'I prefer coffee.'", tokens: ["café", "Je", "le", "thé", "préfère"], correctOrder: ["Je", "préfère", "le", "café"] },
        ],
      },
    ],
  },
  {
    unitId: 3,
    unitTitle: "Unité 3 : Habitudes",
    lessons: [
      {
        lessonId: 7,
        lessonTitle: "Leçon 7 : En famille",
        focus: "Parler de sa famille et présenter ses proches.",
        dialogue: [
          { speaker: "Marc", fr: "Voici mon fils Thomas et ma fille Léa.", en: "Here is my son Thomas and my daughter Léa." },
          { speaker: "Julie", fr: "Ils ont quel âge ?", en: "How old are they?" },
          { speaker: "Marc", fr: "Thomas a dix ans et Léa a sept ans.", en: "Thomas is ten years old and Léa is seven." },
        ],
        vocabulary: [
          { fr: "Le fils", en: "The son" },
          { fr: "La fille", en: "The daughter / girl" },
          { fr: "Les enfants", en: "The children" },
          { fr: "Dix ans", en: "Ten years old" },
        ],
        grammar: {
          title: "Le verbe Avoir (Présent) pour l'âge",
          explanation: "In French, you use the verb 'avoir' (to have) instead of 'être' (to be) to state someone's age.",
          rules: ["J'ai 20 ans (I am 20)", "Ils ont quel âge ? (How old are they?)"],
        },
        challenges: [
          { type: "multiple-choice", question: "Which verb is used to tell age in French?", options: ["Être", "Avoir", "S'appeler", "Faire"], correct: "Avoir" },
          { type: "fill-blank", question: "Thomas ___ dix ans.", blank: "a" },
        ],
      },
      {
        lessonId: 9,
        lessonTitle: "Leçon 9 : Journée bien remplie",
        focus: "Parler de ses activités quotidiennes.",
        dialogue: [
          { speaker: "Pierre", fr: "Le matin, je travaille à huit heures.", en: "In the morning, I work at eight o'clock." },
          { speaker: "Pierre", fr: "Le soir, je regarde la télévision ou je lis.", en: "In the evening, I watch television or I read." },
          { speaker: "Marie", fr: "À quelle heure tu te couches ?", en: "At what time do you go to bed?" },
        ],
        vocabulary: [
          { fr: "Le matin", en: "The morning" },
          { fr: "Le soir", en: "The evening" },
          { fr: "Je travaille", en: "I work" },
          { fr: "Regarder", en: "To watch" },
        ],
        grammar: {
          title: "Les verbes du 1er groupe (-er)",
          explanation: "Regular verbs ending in -er drop the ending and add: -e, -es, -e, -ons, -ez, -ent.",
          rules: ["Je travaille", "Tu travailles", "Il/Elle travaille"],
        },
        challenges: [
          { type: "multiple-choice", question: "What does 'Le soir' mean?", options: ["The morning", "The afternoon", "The evening", "The night"], correct: "The evening" },
          { type: "fill-blank", question: "Je ___ (travailler) à la maison.", blank: "travaille" },
        ],
      },
    ],
  },
  {
    unitId: 4,
    unitTitle: "Unité 4 : Loisirs & Ville",
    lessons: [
      {
        lessonId: 10,
        lessonTitle: "Leçon 10 : Invitation",
        focus: "Inviter quelqu'un, accepter ou refuser.",
        dialogue: [
          { speaker: "Lucas", fr: "Tu es libre ce soir ? Tu veux aller au cinéma ?", en: "Are you free tonight? Do you want to go to the cinema?" },
          { speaker: "Chloé", fr: "Oui, c'est une bonne idée ! À quelle heure ?", en: "Yes, that's a good idea! At what time?" },
          { speaker: "Lucas", fr: "Rendez-vous à vingt heures devant le cinéma.", en: "Meet at 8 PM in front of the cinema." },
        ],
        vocabulary: [
          { fr: "Le cinéma", en: "The cinema" },
          { fr: "Une idée", en: "An idea" },
          { fr: "Tu veux", en: "You want (informal)" },
          { fr: "Devant", en: "In front of" },
        ],
        grammar: {
          title: "Le verbe Vouloir (Présent)",
          explanation: "Use 'vouloir' to express a desire or extend an informal proposal.",
          rules: ["Je veux (I want)", "Tu veux (You want)", "Il veut (He wants)"],
        },
        challenges: [
          { type: "multiple-choice", question: "What does 'Devant' mean?", options: ["Behind", "In front of", "Next to", "Inside"], correct: "In front of" },
          { type: "word-bank", question: "Translate: 'You want to go?'", tokens: ["aller", "veux", "Tu", "cinéma", "Je"], correctOrder: ["Tu", "veux", "aller"] },
        ],
      },
      {
        lessonId: 11,
        lessonTitle: "Leçon 11 : On cherche un hôtel",
        focus: "Demander son chemin, situer des lieux.",
        dialogue: [
          { speaker: "Touriste", fr: "Pardon, où est l'hôtel Astrid, s'il vous plaît ?", en: "Excuse me, where is the Astrid Hotel, please?" },
          { speaker: "Passant", fr: "C'est tout droit, puis à gauche après la banque.", en: "It's straight ahead, then to the left after the bank." },
          { speaker: "Touriste", fr: "Merci beaucoup, bonne journée !", en: "Thank you very much, have a good day!" },
        ],
        vocabulary: [
          { fr: "Où est... ?", en: "Where is...?" },
          { fr: "Tout droit", en: "Straight ahead" },
          { fr: "À gauche", en: "To the left" },
          { fr: "La banque", en: "The bank" },
        ],
        grammar: {
          title: "Les prépositions de lieu",
          explanation: "Use basic locative adverbs to provide directions smoothly.",
          rules: ["À gauche (Left) / À droite (Right)", "Tout droit (Straight ahead)"],
        },
        challenges: [
          { type: "multiple-choice", question: "What is 'To the left'?", options: ["À droite", "À gauche", "Tout droit", "Devant"], correct: "À gauche" },
          { type: "fill-blank", question: "Pardon, ___ est la gare ?", blank: "où" },
        ],
      },
      {
        lessonId: 12,
        lessonTitle: "Leçon 12 : Profils",
        focus: "Décrire les goûts, les professions, et les loisirs.",
        dialogue: [
          { speaker: "Sophie", fr: "Qu'est-ce que tu fais dans la vie ?", en: "What do you do for a living?" },
          { speaker: "Thomas", fr: "Je suis journaliste. J'adore voyager et faire du sport.", en: "I am a journalist. I love traveling and playing sports." },
          { speaker: "Sophie", fr: "Moi, je suis secrétaire. J'aime la musique.", en: "Me, I am a secretary. I like music." },
        ],
        vocabulary: [
          { fr: "Journaliste", en: "Journalist" },
          { fr: "Secrétaire", en: "Secretary" },
          { fr: "J'adore", en: "I love" },
          { fr: "Voyager", en: "To travel" },
        ],
        grammar: {
          title: "Exprimer ses goûts (Aimer / Adorer)",
          explanation: "Follow verbs like 'aimer' or 'adorer' with a definite article (le, la, l', les) or an infinitive verb.",
          rules: ["J'aime voyager (I like traveling)", "J'adore la musique (I love music)"],
        },
        challenges: [
          { type: "multiple-choice", question: "What does 'Voyager' mean?", options: ["To work", "To read", "To travel", "To sleep"], correct: "To travel" },
          { type: "fill-blank", question: "Je ___ journaliste.", blank: "suis" },
        ],
      },
    ],
  },
];

export const ALL_LESSONS: Lesson[] = LE_NOUVEAU_TAXI_COMPLETE_DB.flatMap((u) => u.lessons);